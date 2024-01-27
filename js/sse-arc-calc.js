document.getElementById('checkEligibility').addEventListener('click', () => {
  const subject1 = document.getElementById('r1').value;
  const subject2 = document.getElementById('r21').value;
  const subject3 = document.getElementById('r22').value;

  console.log(subject1);
  console.log(subject2);
  console.log(subject3);

  const hasAMaths = [subject1, subject2, subject3].includes("AddMaths");
  const hasArts = [subject1, subject2, subject3].includes("Arts");
  const hasArtDes = [subject1, subject2, subject3].includes("ArtDes");
  const hasBio = [subject1, subject2, subject3].includes("Bio");
  const hasBusStu = [subject1, subject2, subject3].includes("BusiStu");
  const hasChem = [subject1, subject2, subject3].includes("Chem");
  const hasComSci = [subject1, subject2, subject3].includes("CombSci");
  const hasComm = [subject1, subject2, subject3].includes("Comm");
  const hasCommStu = [subject1, subject2, subject3].includes("CommStu");
  const hasCompSci = [subject1, subject2, subject3].includes("CompSci");
  const hasCompStu = [subject1, subject2, subject3].includes("CompStu");
  const hasDnT = [subject1, subject2, subject3].includes("DnT");
  const hasEngLit = [subject1, subject2, subject3].includes("EngLit");
  const hasFArt = [subject1, subject2, subject3].includes("FArt");
  const hasGeo = [subject1, subject2, subject3].includes("Geo");
  const hasHist = [subject1, subject2, subject3].includes("Hist");
  const hasICT = [subject1, subject2, subject3].includes("ICT");
  const hasPhy = [subject1, subject2, subject3].includes("Phy");
  const hasPOA = [subject1, subject2, subject3].includes("POA");

  const arcMostRel = (hasArts||hasArtDes||hasDnT||hasFArt||hasPhy);
  const arcRel = (hasAMaths||hasArts||hasArtDes||hasBio||hasBusStu||hasChem||hasComSci||hasComm||hasCommStu||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasFArt||hasGeo||hasHist||hasICT||hasPhy||hasPOA);


  const indMostRel = (hasArts||hasArtDes||hasBio||hasChem||hasDnT||hasFArt||hasPhy);
  const indRel = (hasAMaths||hasArts||hasArtDes||hasBio||hasBusStu||hasChem||hasComSci||hasComm||hasCommStu||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasFArt||hasGeo||hasHist||hasICT||hasPhy||hasPOA);
  
  const arcEligible = (arcMostRel&&arcRel&&arcRel);
  const indEligible = (indMostRel&&indRel&&indRel);
  
  document.getElementById('arcResult').textContent = arcEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('indResult').textContent = indEligible ? 'Eligible' : 'Not Eligible';
  
  const resultsTable = document.getElementById('resultsTable');
  resultsTable.style.display = 'table';

  console.log(bafEligible);
});