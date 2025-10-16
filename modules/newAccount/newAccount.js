
async function verifyUserExist(email) {
    try {
        const response = await $.ajax({
            type: "GET",
            url: `http://localhost:3000/api/users/by-email?email=${encodeURIComponent(email)}`, // o email vai no path
            contentType: "application/json"
        });
        return !!response.user;
    } catch (err) {
        if (err.status === 404) return false;
        console.log("error on verify function " + err);
    }

}

function validate(value, typeValidation) {
    let valido = false;

    switch (typeValidation.toLowerCase()) {
        case 'email':
            valido = /^[^\s@]+@gmail\.com$/.test(value);
            if (!valido) {
                showAlert("Attention", "Email is not compatible", "warning");
            }
            break;
        case 'password':
            valido = value.length >= 6;
            if (!valido) {
                showAlert('Attention', 'The password must have atleast 6 words', "warning");
            }
            break;
        case 'username':
            let raw = value.trim();
            let clean = value.replace(/[^\w]/g, '');
            if (clean !== raw) {
                showAlert('Attention', 'We cleaned the special characters of the Username', 'warning');
                $("#username").val(clean);
            }
            valido = clean.length >= 3;
            if (!valido) {
                showAlert('Attention', 'The Username must have atleast 3 characters', 'warning');
            }
            break;
        default:
            console.warn('Type not supported:', typeValidation);
            valido = false;
    }
    return valido;
}

function verifyFields(email, password, passwordConfirm, username) {
    if (!validate(username, "username")) {
        showAlert('Attention', 'Invalid Username', 'warning');
        $("#username").focus();
        return false;
    }
    if (!validate(email, 'email')) {
        $("#email").focus();
        return false;
    }

    if (!validate(password, 'password')) {
        $("#password").focus();
        return false;
    }

    if (password !== passwordConfirm) {
        $("#passwordConfirm").focus();
        showAlert('Attention', 'Password divergence', 'warning');
        return false;
    }
    return true;
}
function generateRandomPlaceholder() {
    let placeholderList = [
        "Ex: Vander the Lightbringer",
        "Ex: Jack the Lumberjack",
        "Ex: Selena the Shadowblade",
        "Ex: Borin the Stonefist",
        "Ex: Elara the Moonweaver",
        "Ex: Kragor the Dragonsbane",
        "Ex: Lyra the Stormcaller",
        "Ex: Thorin the Ironheart",
        "Ex: Mira the Spellbinder",
        "Ex: Darius the Flameforged",
        "Ex: Kaelen the Stormrider",
        "Ex: Arwyn the Dawnseeker",
        "Ex: Draven the Ironclaw",
        "Ex: Sylas the Nightstalker",
        "Ex: Thalindra the Soulweaver",
        "Ex: Ragnar the Wolfbane",
        "Ex: Liora the Starborn",
        "Ex: Fenric the Frostfang",
        "Ex: Zarek the Voidwalker",
        "Ex: Seraphina the Emberheart"
    ];
    let randomIndex = Math.floor(Math.random() * placeholderList.length);

    let randomPlaceholder = placeholderList[randomIndex];

    $("#username").attr("placeholder", randomPlaceholder);
}

function createNewUser(email, password, name, codtype) {
    $.ajax({
        url: "http://localhost:3000/api/users/",
        type: "POST",
        contentType: 'application/json', // envia em formato JSON
        data: JSON.stringify({ email, password, name, codtype }), // corpo da requisição
        success: function (response) {
            showAlert('Success', 'User created!', 'success');
        },
        error: function (xhr) {
            if (xhr.responseJSON && xhr.responseJSON.erro) {
                alert('Erro: ' + xhr.responseJSON.erro);
            } else {
                alert('Erro inesperado no servidor.');
            }
        }

    })
}


$(document).ready(function () {
    generateRandomPlaceholder();

    $("#showPassword").click(function () {
        let inputSenha = $("#password")
        let eye = $(".eyeIcon")
        if ($(this).hasClass("closed")) {
            inputSenha.attr("type", "text")
            $(this).removeClass("closed").addClass("open")
            eye.removeClass("fa-eye-slash").addClass("fa-eye")
        } else {
            inputSenha.attr("type", "password")
            $(this).removeClass("open ").addClass("closed")
            eye.removeClass("fa-eye").addClass("fa-eye-slash")
        }
    })

    $("#username").blur(function () {
        let value = $(this).val();
        let clean = value.replace(/[^\w]/g, '');
        $(this).val(clean)
    });

    $("#btnConfirm").click(async function () {
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();
        const passwordConfirm = $('#passwordConfirm').val().trim();
        const username = $("#username").val().trim();
        if (verifyFields(email, password, passwordConfirm, username) == false) {
            return;
        }
        const exists = await verifyUserExist(email);
        if (!exists) {
            createNewUser(email, password, username, 2);
        } else {
            showAlert("Attention", "The email is already in use", "warning")
        }
    });
})
