import { handleSubmit } from './js/formHandler'
import { updateUI } from './js/updateUI'

import './styles/base.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/header.scss'

document.getElementById('submit').addEventListener('click', handleSubmit);

export {
    handleSubmit,
    updateUI
}