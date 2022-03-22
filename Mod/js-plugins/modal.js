function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('my_modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal_overlay">
      <div class="modal_window">
        <div class="modal_header">
          <span class="modal_title">Modal title</span>
          <span class="modal_close">&times;</span>
        </div>
        <div class="modal_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="modal-footer">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>`)

    document.body.appendChild(modal);
    return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 1000;
  const $modal = _createModal()
  let closing = false;

  return {
    open() {
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('open')
        closing = false
      }, ANIMATION_SPEED);
    },
    destroy() {},
  }
}