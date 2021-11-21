import { checkUrl } from './js/checkUrl'
import { handleSubmit } from './js/formHandler'
import { getData } from './js/getData'
import { updateUI } from './js/updateUI'
// import { testing } from './js/testing'
import { performAction } from './js/app'

import './styles/base.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/header.scss'

document.getElementById('submit').addEventListener('click', performAction);

export {
    checkUrl,
    handleSubmit,
    getData,
    updateUI,
    // testing,
    performAction
}