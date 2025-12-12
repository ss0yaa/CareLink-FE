import React from 'react'
import ModalBase from './ModalBase'

function PillModal({ onClose }) {
  const handleConfirm = () => {
    onClose()
  }
  return (
    <>
      <ModalBase
        title='약 복용 확인'
        detail='약 정보 수정은 환경설정에서 가능합니다.'
        onClose={onClose}
        onConfirm={handleConfirm}
        containerClassName='w-[787px]'
      ></ModalBase>
    </>
  )
}

export default PillModal
