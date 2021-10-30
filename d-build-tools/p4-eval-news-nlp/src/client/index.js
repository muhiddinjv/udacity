import { checkForUrl } from './js/checkForUrl'
import { handleSubmit } from './js/formHandler'
import { getAnalysis } from './js/getAnalysis'
import { postData } from './js/postData'
import { updateUI } from './js/updateUI'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForUrl);

export {
    checkForUrl,
    handleSubmit,
    getAnalysis,
    postData,
    updateUI,
}
