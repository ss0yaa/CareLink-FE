import React, { useRef, useState, useCallback } from 'react'
import MicModal from './MicModal'
import MicOff from '@/assets/icons/icon-microphone-off.svg'
import MicOn from '@/assets/icons/icon-microphone-on.svg'

function ChatInputBar({ onSend }) {
  const [text, setText] = useState('') // 입력한 채팅
  const [isRecording, setIsRecording] = useState(false) // 녹음중 여부
  const [isMicModalOpen, setIsMicModalOpen] = useState(false)
  const streamRef = useRef(null) // 마이크
  const recordRef = useRef(null) // 녹음기
  const chunksRef = useRef([]) // 녹음 데이터

  // 녹음 시작 함수
  const startRecording = async () => {
    try {
      if (isRecording) return
      if (!navigator.mediaDevices?.getUserMedia) return
      if (!window.MediaRecorder) return

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream // 마이크 기억

      // 마이크와 녹음기 연결
      const recorder = new MediaRecorder(stream)
      recordRef.current = recorder

      // 이전 녹음 데이터 초기화
      chunksRef.current = []

      // 녹음 중 데이터가 들어올 때마다 조각 저장
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      // 녹음이 끝났을 때
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType })
        // Blob -> File 변환
        const file = new File([blob], 'recording.webm', {
          type: blob.type,
          lastModified: Date.now(),
        })

<<<<<<< HEAD
=======
        // 미리듣기 (추후 삭제)
        const url = URL.createObjectURL(file)
        console.log('미리듣기 URL:', url)
        window.open(url)

>>>>>>> dab64dfa8ca7872ddec519a3b92968057cfd3e05
        // 업로드할 파일 콘솔 찍어보기
        console.log('업로드할 파일: ', file)
        chunksRef.current = []
        setIsRecording(false)
        setIsMicModalOpen(false)

        streamRef.current?.getTracks().forEach((t) => t.stop())
        streamRef.current = null
        recordRef.current = null
      }

      recorder.start()
      setIsRecording(true)
      setIsMicModalOpen(true)
    } catch (err) {
      console.error(err)
      setIsRecording(false)
    }
  }

  // 녹음 중단 함수
  const stopRecording = () => {
    if (!recordRef.current) return
    recordRef.current.stop() // onstop 실행
  }

  const handleClick = () => {
    if (!text.trim()) return
    onSend(text)
    setText('')
  }
  const handleKeyDown = (e) => {
    // 엔터 누르면 채팅 전송
    if (e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className=' h-[99px] bg-white rounded-b-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center'>
      <div className='flex flex-row px-[26px] w-full'>
        <div className='relative flex-1 px-[30px] py-[19px] bg-white rounded-tl-[10px] rounded-bl-[10px] border border-[#47B5A2] text-[18px] '>
          {/* 키보드 입력 */}
          <input
            placeholder='하고 싶은 말을 여기에 입력해주세요.'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className='w-full bg-transparent outline-none'
          />
          {/* 음성 입력 */}
          <button
            type='button'
            onClick={isRecording ? stopRecording : startRecording}
            className='absolute -translate-y-1/2 cursor-pointer right-5 top-1/2'
          >
            {isRecording ? <img src={MicOn} alt='녹음중' /> : <img src={MicOff} alt='녹음 중단' />}
          </button>
        </div>
        {/* 전송 버튼 */}
        <button
          onClick={handleClick}
          className='px-[29px] py-[18px] bg-primary rounded-tr-[10px] rounded-br-[10px] text-white text-5 font-normal cursor-pointer'
        >
          보내기
        </button>
      </div>
      {isMicModalOpen && <MicModal onClose={stopRecording} />}
    </div>
  )
}

export default ChatInputBar
