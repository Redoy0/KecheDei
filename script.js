function genaratePdf(){
    const elem=document.getElementById("test");
    html2pdf().from(elem).save();
}