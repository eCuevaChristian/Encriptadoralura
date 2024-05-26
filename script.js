* {
    color: #333;
    font-family: 'Inter';
    font-weight: 500;
    line-height: 23px;
    font-size: 20px;
}

body {
    background: linear-gradient(to bottom, #D8DFE8, #1e4ca9ce);
}

.logo {
    padding-top: 10px;
    margin-left: 10px;
    margin-top: 0px;
    width: 6%;
}

main {
    display: flex;
    margin-bottom: 30px;
    margin-top: 0px;
    margin-left: 120px;
}

.textarea {
    width: 130%;
    height: 280px;
    padding: 10px;
    font-size: 23px;
    border-radius: 15px;
    background-color: transparent;
    border-color: rgba(255, 0, 0, 0);
    color: #0A3871;
    margin-top: 70px;
    margin-bottom: 70px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-transform: lowercase;
}

.textarea:focus {
    outline: none;
}

::placeholder {
    color: #0A3871;
}
 .mensaje::placeholder{
    text-align: center;
 }
.mensaje {
    background: white;
    background-image: url("/imagenes/Muñeco.png");
    background-position: center;
    background-size: 95%;
    width: 46%;
    height: 100%;
    background-repeat: no-repeat;
    border: 0px solid #cccccc00;
    border-radius: 24px;
    color: #0A3871;
    margin-left: 400px;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
position: relative;
}

.mensaje-contenedor {
    position: relative;
}

.mensaje:focus {
    outline: none;
}

.botones {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}

.btn-desencriptar {
    background: #D8DFE8;
    border: 1px solid #0A3871;
    border-radius: 16px;
    color: #0A3871;
    cursor: pointer;
    height: 44px;
    margin-left: 20px;
    width: 268px;
}

.btn-encriptar {
    background-color: #0A3871;
    border: 1px solid #0A3871;
    border-radius: 16px;
    color: white;
    cursor: pointer;
    height: 44px;
    width: 268px;
}


.copiar {
    display: none;
    border: 1px solid #0A3871;
    border-radius: 16px;
    color: #0A3871;
    cursor: pointer;
    height: 44px;
    width: 268px;
    position: absolute;
    bottom: 0px;
    left: 65%;
    align-items: center;
}

.informacion {
    color: #495057;
    font-size: 15px;
}

footer {
    width: auto;
    text-align: center;
    margin-top: 4%;
    padding: 1.1%;
    border-top: 1px solid rgb(178, 182, 178);
    color: #efefef;
    height: 10px;
    font-weight: bold;
    font-family: 'Inter';
}
