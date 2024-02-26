const bouton = document.querySelector("#bouton")
let bars = document.querySelector(".menu-deroulant")
let menu = document.querySelector(".navbar")

// fonction mamerina @ default value 
const resetFormStyles = (elements) => {
    elements.forEach(element => {
        element.style.borderColor = ""
        element.style.borderWidth = ""
        element.placeholder = ""
    })
}

// refa msubmit de miasa lo ty
const validateForm = (event) => {
    try {
        const inputNom = document.querySelector("#nom")
        const inputPrenom = document.querySelector("#prenom")
        const inputEmail = document.querySelector("#mail")
        const commentaire = document.querySelector("#commentaire")

        // tableau mstocke ny imput à champ obligatoire
        const formElements = [inputNom, inputEmail, commentaire]

        // .trim() : manala ny espace vide avant sy après
        if (inputNom.value.trim() === '' || commentaire.value.trim() === '' || inputEmail.value.trim() === '') {
            event.preventDefault()
            bouton.style.backgroundColor = "#ad0002"
            bouton.innerHTML = "Veuillez réessayer <i class='fas fa-exclamation-circle'></i>"
            bouton.style.fontWeight = "700"

            formElements.forEach(element => {
                if (element.value.trim() === '') {
                    element.style.borderColor = "#ad0002"
                    element.style.borderWidth = "1px"
                    element.placeholder = "champ obligatoire"
                }
            })

            setTimeout(() => {
                bouton.innerHTML = "<i class='fas fa-paper-plane'></i> Envoyer"
                bouton.style.backgroundColor = "seagreen"
                bouton.style.fontWeight = "normal"
                resetFormStyles(formElements)
            }, 1300) // Attendre 1,3s pour revenir à la couleur et au texte par défaut
            return false // Empêcher l'envoi du formulaire
        }

        bouton.innerHTML = "Envoyé <i class='fas fa-check-circle'></i>"
        return true // Autoriser l'envoi du formulaire
    } catch (err) {
        console.error(err)
    }
}

// menu déroulant pour media queries

bars.addEventListener('click', () => {
	menu.classList.toggle('active')
})
