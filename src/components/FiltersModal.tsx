interface FiltersModalProps {
  toggleModal: () => void 
}

export function FiltersModal({toggleModal} : FiltersModalProps) {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleModal}>
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Filter</h3>
        <div className="py-2">

        </div>
      </div>
    </dialog>
  )
}