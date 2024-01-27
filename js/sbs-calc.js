document.getElementById('checkEligibility').addEventListener('click', () => {
  const subject1 = document.getElementById('r1').value;
  const subject2 = document.getElementById('r21').value;
  const subject3 = document.getElementById('r22').value;

  console.log(subject1);
  console.log(subject2);
  console.log(subject3);

  const hasAccounting = [subject1, subject2, subject3].includes("Accts");
  const hasAddMaths = [subject1, subject2, subject3].includes("AddMaths");
  const hasBio = [subject1, subject2, subject3].includes("Bio");
  const hasBusiStu = [subject1, subject2, subject3].includes("BusiStu");
  const hasChem = [subject1, subject2, subject3].includes("Chem");
  const hasCombSci = [subject1, subject2, subject3].includes("CombSci");
  const hasComm = [subject1, subject2, subject3].includes("Comm");
  const hasCommStu = [subject1, subject2, subject3].includes("CommStu");
  const hasCompSci = [subject1, subject2, subject3].includes("CompSci");
  const hasCompStu = [subject1, subject2, subject3].includes("CompStu");
  const hasEco = [subject1, subject2, subject3].includes("Eco");
  const hasEngLit = [subject1, subject2, subject3].includes("EngLit");
  const hasFaN = [subject1, subject2, subject3].includes("FaN");
  const hasGeo = [subject1, subject2, subject3].includes("Geo");
  const hasHist = [subject1, subject2, subject3].includes("Hist");
  const hasICT = [subject1, subject2, subject3].includes("ICT");
  const hasPhy = [subject1, subject2, subject3].includes("Phy");
  const hasPoA = [subject1, subject2, subject3].includes("POA");
  const hasSocio = [subject1, subject2, subject3].includes("Socio");
  const hasTravel = [subject1, subject2, subject3].includes("TaT");
  const hasStat = [subject1, subject2, subject3].includes("Stat");

  const beEligible = hasAccounting||hasAddMaths||hasBio||hasBusiStu||hasChem||hasCombSci||hasComm||hasCommStu||hasCompSci||hasCompStu||hasEco||hasEngLit||hasGeo||hasHist||hasICT||hasPhy||hasPoA||hasSocio||hasStat;


  const bafEligible = (hasAccounting&&beEligible && beEligible && !hasTravel && !hasFaN);
  const hcmEligible = (beEligible && beEligible && !hasTravel && !hasFaN);
  const emsEligible = (beEligible && beEligible && !hasTravel && !hasFaN);
  const hmoEligible = (!hasAccounting&&!hasBio&&!hasChem&&!hasPhy&&!hasPoA&&hasFaN&&!hasTravel) || (!hasAccounting&&!hasBio&&!hasChem&&!hasPhy&&!hasPoA&&!hasFaN&&hasTravel) || (!hasAccounting&&!hasBio&&!hasChem&&!hasPhy&&!hasPoA&&hasFaN&&hasTravel)

  document.getElementById('bafResult').textContent = bafEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('hcmResult').textContent = hcmEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('emsResult').textContent = emsEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('hmoResult').textContent = hmoEligible ? 'Eligible' : 'Not Eligible';

  const resultsTable = document.getElementById('resultsTable');
  resultsTable.style.display = 'table';

  console.log(bafEligible);
});