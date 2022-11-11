function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;

    hash(input).then((hex) => test(hex));
}


function hash(string) {
    const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
  }


  function test(lehash) {
    
    var sha = "10bc0289455880c6162d632c9d9a2edaec2f7182cf952608cee965ac8d623d14";
    
    if (sha == lehash){
        document.getElementById('reponse').textContent = 'Ok c\'est bon';
    } else {
        document.getElementById('reponse').textContent = 'C\'est pas ça';
    }
  }