const apiUrl = 'http://localhost:3000/api'; // URL da API
const correctUsername = 'kaua'; // Defina o nome de usuário correto aqui
const correctPassword = '1234'; // Defina a senha correta aqui

// Função para verificar o nome de usuário e a senha
function verificarCredenciais(username, senha) {
    return username === correctUsername && senha === correctPassword;
}

// Função para lidar com o login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const username = document.getElementById('username').value;
    const senha = document.getElementById('senha').value;

    if (verificarCredenciais(username, senha)) {
        localStorage.setItem('autenticado', 'true'); // Armazena a autenticação no localStorage
        window.location.href = 'index.html'; // Redireciona para a página principal
    } else {
        document.getElementById('error').innerText = 'Nome de usuário ou senha incorretos. Tente novamente.';
    }
});

// Verifica se o usuário está autenticado ao carregar a página principal
if (localStorage.getItem('autenticado') !== 'true') {
    window.location.href = 'login.html'; // Redireciona para a página de login
}

// Função para listar itens do cardápio
function listarCardapio() {
    fetch(`${apiUrl}/cardapio`)
        .then(response => response.json())
        .then(data => {
            const cardapioDiv = document.getElementById('cardapio');
            cardapioDiv.innerHTML = '<h3>Itens do Cardápio:</h3>';
            data.forEach(item => {
                cardapioDiv.innerHTML += `<p>${item.nome} - R$ ${item.preco} - ${item.descricao}</p>`;
            });
        })
        .catch(error => console.error('Erro ao listar cardápio:', error));
}

// Função para adicionar um item ao cardápio
document.getElementById('addItemForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const novoItem = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value
    };

    fetch(`${apiUrl}/cardapio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoItem)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            listarCardapio(); // Atualiza a lista após adicionar
        })
        .catch(error => console.error('Erro ao adicionar item:', error));
});

// Função para listar reservas
function listarReservas() {
    fetch(`${apiUrl}/reservas`)
        .then(response => response.json())
        .then(data => {
            const reservasDiv = document.getElementById('reservas');
            reservasDiv.innerHTML = '<h3>Reservas:</h3>';
            data.forEach(reserva => {
                reservasDiv.innerHTML += `<p>${reserva.nome_cliente} - ${reserva.data_reserva} - ${reserva.numero_pessoas} pessoas</p>`;
            });
        })
        .catch(error => console.error('Erro ao listar reservas:', error));
}

// Função para fazer uma reserva
document.getElementById('addReservaForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const novaReserva = {
        nome_cliente: document.getElementById('nome_cliente').value,
        data_reserva: document.getElementById('data_reserva').value,
        numero_pessoas: document.getElementById('numero_pessoas').value
    };

    fetch(`${apiUrl}/reservas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaReserva)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            listarReservas(); // Atualiza a lista após adicionar
        })
        .catch(error => console.error('Erro ao fazer reserva:', error));
});

// Função para alternar entre tema claro e escuro
document.querySelectorAll('#toggleTheme').forEach(button => {
    button.addEventListener('click', function () {
        const body = document.body;
        const mainContainer = document.getElementById('mainContent');
        const loginContainer = document.getElementById('loginContainer');
        const toggleButton = document.getElementById('toggleTheme');

        body.classList.toggle('dark');
        if (mainContainer) {
            mainContainer.classList.toggle('dark');
        }
        if (loginContainer) {
            loginContainer.classList.toggle('dark');
        }
        toggleButton.classList.toggle('dark');

        // Salvar a preferência do tema no localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

// Verificar a preferência do tema ao carregar a página
window.onload = function () {
    if (localStorage.getItem('autenticado') === 'true') {
        document.getElementById('mainContent').style.display = 'block'; // Exibe o conteúdo principal
        listarCardapio();
        listarReservas();

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('mainContent').classList.add('dark');
            document.getElementById('toggleTheme').classList.add('dark');
        }
    } else {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('loginContainer').classList.add('dark');
            document.getElementById('toggleTheme').classList.add('dark');
        }
    }
};

// Verificar a preferência do tema ao carregar a página
window.onload = function () {
    if (localStorage.getItem('autenticado') === 'true') {
        document.getElementById('mainContent').style.display = 'block'; // Exibe o conteúdo principal
        listarCardapio();
        listarReservas();

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('mainContent').classList.add('dark');
            document.getElementById('toggleTheme').classList.add('dark');
        }
    } else {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('loginContainer').classList.add('dark');
            document.getElementById('toggleTheme').classList.add('dark');
        }
    }
};


// Verificar a preferência do tema ao carregar a página
window.onload = function () {
    if (localStorage.getItem('autenticado') === 'true') {
        document.getElementById('mainContent').style.display = 'block'; // Exibe o conteúdo principal
        listarCardapio();
        listarReservas();

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            document.getElementById('mainContent').classList.add('dark');
            document.getElementById('toggleTheme').classList.add('dark');
        }
    }
};

document.getElementById('addProductForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const novoProduto = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value
    };
    fetch(`${apiUrl}/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            // Atualize a lista de produtos após adicionar
            listarProdutos();
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
});
// /Frontend/script.js
document.getElementById('addReservaForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const novaReserva = {
        nome_cliente: document.getElementById('nome_cliente').value,
        data_reserva: document.getElementById('data_reserva').value,
        numero_pessoas: document.getElementById('numero_pessoas').value
    };

    fetch(`${apiUrl}/reservas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaReserva)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            // Atualize a lista de reservas após adicionar
            listarReservas();
        })
        .catch(error => console.error('Erro ao adicionar reserva:', error));
});
