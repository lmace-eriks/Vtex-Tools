const generateRichText = () => {
    const richTextTitle = document.getElementById("text-title").value;
    const richTextPrefix = `"rich-text#${richTextTitle}": {<br>&nbsp;&nbsp; "props": {<br>`;
    const blockClass = document.getElementById("block-class").value;
    const textAlignment = document.getElementById("text-alignment").value;
    const textPosition = document.getElementById("text-position").value;

    outputDiv.innerHTML = 
    `${richTextPrefix}

    &nbsp;&nbsp&nbsp;&nbsp "text": "${inputText.value}", <br>
    ${textAlignment === "LEFT" ? "" : `&nbsp;&nbsp&nbsp;&nbsp "textAlignment": "${textAlignment}", <br>`}
    ${textPosition === "LEFT" ? "" : `&nbsp;&nbsp&nbsp;&nbsp "textPosition": "${textPosition}", <br>`}
    ${blockClass === "" ? "" : `&nbsp;&nbsp&nbsp;&nbsp "blockClass": "${blockClass}", <br>`}

    ${richTextEnding}`;
}

const inputText = document.getElementById("input-text");
const outputDiv = document.getElementById("output-div");

const richTextEnding = `&nbsp} <br> }`;

// document.getElementById("generate").onclick = generateRichText;
document.getElementById("text-alignment").onchange = generateRichText;
document.getElementById("text-position").onchange = generateRichText;
document.getElementById("text-title").onkeyup = generateRichText;
document.getElementById("block-class").onkeyup = generateRichText;
document.getElementById("input-text").onkeyup = generateRichText;