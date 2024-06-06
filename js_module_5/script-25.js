document.addEventListener('DOMContentLoaded', function() {
    // Функція для визначення HTML
    function showHtmlDefinition() {
        document.getElementById('definitions').innerHTML = '<strong>HTML</strong> (HyperText Markup Language) - це стандартна мова розмітки для створення веб-сторінок та веб-додатків.';
    }

    // Функція для визначення CSS
    function showCssDefinition() {
        document.getElementById('definitions').innerHTML = '<strong>CSS</strong> (Cascading Style Sheets) - це мова стилів, що використовується для опису зовнішнього вигляду та форматування веб-документів, написаних мовою розмітки, такою як HTML.';
    }

    // Закріплення функцій на кнопках
    document.getElementById('htmlButton').addEventListener('click', showHtmlDefinition);
    document.getElementById('cssButton').addEventListener('click', showCssDefinition);
});