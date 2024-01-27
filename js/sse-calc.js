document.getElementById('checkEligibility').addEventListener('click', () => {
  const subject2 = document.getElementById('r21').value;
  const subject3 = document.getElementById('r22').value;

  console.log(subject2);
  console.log(subject3);

  const hasAMaths = [subject2, subject3].includes("AddMaths");
  const hasBio = [subject2, subject3].includes("Bio");
  const hasChem = [subject2, subject3].includes("Chem");
  const hasCombSci = [subject2, subject3].includes("CombSci");
  const hasCompSci = [subject2, subject3].includes("CompSci");
  const hasCompStu = [subject2, subject3].includes("CompStu");
  const hasDnT = [subject2, subject3].includes("DnT");
  const hasEco = [subject2, subject3].includes("Eco");
  const hasEngLit = [subject2, subject3].includes("EngLit");

  const hasGeo = [subject2, subject3].includes("Geo");
  
  const cvlRel = (!hasEco&&(hasAMaths||hasBio||hasChem||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasGeo||hasCombSci<4));
  const eeeRel = (hasAMaths||hasBio||hasChem||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasGeo||hasEco||hasCombSci<4);
  const eceRel = (!hasEco&&(hasAMaths||hasBio||hasChem||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasGeo||hasCombSci<4));
  const megRel = (!hasEco&&(hasAMaths||hasBio||hasChem||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasGeo||hasCombSci<4));
  const pegRel = (!hasEco&&(hasAMaths||hasBio||hasChem||hasCompSci||hasCompStu||hasDnT||hasEngLit||hasGeo||hasCombSci<4));
  
  const cvlEligible = (cvlRel&&cvlRel);
  const eeeEligible = (eeeRel&&eeeRel);
  const eceEligible = (eceRel&&eceRel);
  const megEligible = (megRel&&megRel);
  const pegEligible = (pegRel&&pegRel);

  
  document.getElementById('cvlResult').textContent = cvlEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('eeeResult').textContent = eeeEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('eceResult').textContent = eceEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('megResult').textContent = megEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('pegResult').textContent = pegEligible ? 'Eligible' : 'Not Eligible';
  
  const resultsTable = document.getElementById('resultsTable');
  resultsTable.style.display = 'table';
});