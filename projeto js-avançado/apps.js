"use strict";

const lista = document.querySelector("#lista");
const status = document.querySelector("#status");
const botaoFetch = document.querySelector("#fetch");
const botaoXHR = document.querySelector("#xhr");

function inserir(titulo) {
    const item = document.createElement("li");
    item.textContent = titulo;
    lista.append(item);
}

function renderizar(dados) {
    if (!Array.isArray(dados)) throw new Error("Esperado um array.");

    for (const curso of dados) {
        if (!curso || typeof curso.titulo !== "string") {
            throw new Error("Curso sem título válido.");
        }
    }

    lista.replaceChildren();

    for (const curso of dados) inserir(curso.titulo);
}

function carregando(ativo) {
    botaoFetch.disabled = ativo;
    botaoXHR.disabled = ativo;
}

document.querySelector("#alterar").addEventListener("click", function () {
    document.querySelector("#titulo").textContent = "Meus cursos";
});

document.querySelector("#adicionar").addEventListener("click", function () {
    inserir("Curso de DOM");
});