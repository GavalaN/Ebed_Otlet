let otletek = []

fetch("ebed_otlet.txt")
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
    const sorok = text.split('\n').filter(line => line.trim() !== '');

    otletek = sorok.map(sor => {
        const [otlet, webcim] = sor.split(';').map(item => item.trim());
        return { otlet, webcim};
    });

    /*const tartalomElem = document.getElementById("tartalom");
    tartalomElem.innerHTML = '<ul>' + otletek.map(({ otlet, webcim}) => 
        `<li><strong>${otlet}</strong><br>Leírás: ${webcim}</li>`
    ).join('') + '</ul>';*/
  })
  .catch((e) => console.error(e));

function valasztas() {
    const aktualisElem = document.getElementById("aktualis");
    const aktualisWebcimElem = document.getElementById("aktualisWebcim");
    const elozoElem = document.getElementById("elozo");
    const elozoWebcimElem = document.getElementById("elozoWebcim");

    elozoElem.innerText = aktualisElem.innerText;
    elozoWebcimElem.href = aktualisWebcimElem.href;
    const random = Math.floor(Math.random() * otletek.length);
    aktualisElem.innerText = otletek[random].otlet;
    aktualisWebcimElem.href = otletek[random].webcim;
}
