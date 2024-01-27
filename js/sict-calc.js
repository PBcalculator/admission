document.getElementById('checkEligibility').addEventListener('click', () => {
  const subject1 = document.getElementById('r1').value;
  const subject2 = document.getElementById('r21').value;
  const subject3 = document.getElementById('r22').value;

  console.log(subject1);
  console.log(subject2);
  console.log(subject3);

  const hasBio = [subject1, subject2, subject3].includes("Bio");
  const hasChem = [subject1, subject2, subject3].includes("Chem");
  const hasCompStu = [subject1, subject2, subject3].includes("CompStu");
  const hasCompSci = [subject1, subject2, subject3].includes("CompSci");
  const hasICT = [subject1, subject2, subject3].includes("ict");
  const hasPhy = [subject1, subject2, subject3].includes("Phy");

  const hasAmaths =  [subject1, subject2, subject3].includes("AddMaths");
  const hasStat = [subject1, subject2, subject3].includes("Stat");

  const hasArts = [subject1, subject2, subject3].includes("Arts");
  const hasArtDesign = [subject1, subject2, subject3].includes("ArtDes");
  const hasFArts = [subject1, subject2, subject3].includes("Fine");
  const hasBusStu = [subject1, subject2, subject3].includes("BusStu");
  const hasDesTch = [subject1, subject2, subject3].includes("DnT");

  const hasSocio = [subject1, subject2, subject3].includes("Socio");

  const hasCombSci =[subject1, subject2, subject3].includes("CombSci");
  const hasComm = [subject1, subject2, subject3].includes("Comm");
  const hasCommStu = [subject1, subject2, subject3].includes("CommStu");
  const hasEco = [subject1, subject2, subject3].includes("Eco");
  const hasGeo = [subject1, subject2, subject3].includes("Geo");

  const hasengLit = [subject1, subject2, subject3].includes("engLit")

  const adtMostRel = (hasBio||hasChem||hasCompSci||hasCompStu||hasICT||hasPhy);
  const adtRel = (hasAmaths||hasBio||hasBusStu||hasChem||hasCombSci||hasComm||hasCompSci||hasCompStu||hasCommStu||hasEco||hasGeo||hasICT||hasPhy||hasSocio||hasStat);

  const mathsD=document.getElementById('g2-1').value;
  const datMostRel = (hasAmaths||hasBio||hasChem||hasCompStu||hasCompSci||hasICT||hasPhy||hasStat);
  const datRel = (hasAmaths||hasBio||hasBusStu||hasChem||hasCombSci||hasComm||hasCompSci||hasCompStu||hasCommStu||hasEco||hasGeo||hasICT||hasPhy||hasSocio||hasStat);

  const damMostRel = (hasArts||hasArtDesign||hasCompSci||hasCompStu||hasFArts||hasICT);
  const damRel= (hasArts||hasArtDesign||hasAmaths||hasBusStu||hasBio||hasChem||hasCombSci||hasCommStu||hasComm||hasDesTch||hasEco||hasFArts||hasGeo||hasICT||hasPhy||hasSocio||hasStat);

  const cngMostRel= (hasBio||hasChem||hasCompStu||hasCompSci||hasICT||hasPhy);
  const cngRel = (hasAmaths||hasBio||hasBusStu||hasChem||hasCombSci||hasComm||hasCompSci||hasCompStu||hasCommStu||hasEco||hasGeo||hasICT||hasPhy||hasSocio||hasStat);

  const wtyMostRel = (hasBio||hasChem||hasCompStu||hasCompSci||hasICT||hasPhy);
  const wtyRel = (hasAmaths||hasBio||hasBusStu||hasChem||hasCombSci||hasComm||hasCompStu||hasCompSci||hasCommStu||hasICT||hasEco||hasGeo||hasPhy||hasStat);

  const adtEligible = (!hasArts&&!hasArtDesign&&!hasFArts && !hasDesTch &&!hasengLit &&adtMostRel && adtRel && adtRel);
  const datEligible = (mathsD<=4 && (!hasArts&&!hasArtDesign&&!hasFArts && !hasDesTch &&!hasengLit &&datMostRel&&datRel&&datRel));
  const damEligible = (damMostRel&&damRel&&damRel);
  const cngEligible = (!hasArts &&!hasArtDesign &&!hasFArts && !hasDesTch &&!hasengLit && cngMostRel && cngRel && cngRel);
  const wtyEligible = (!hasArts&&!hasArtDesign&&!hasFArts && !hasDesTch &&!hasengLit&&wtyMostRel&&wtyRel&&wtyRel);

  document.getElementById('adtResult').textContent = adtEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('datResult').textContent = datEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('damResult').textContent = damEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('cngResult').textContent = cngEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('wtyResult').textContent = wtyEligible ? 'Eligible' : 'Not Eligible';

  const resultsTable = document.getElementById('resultsTable');
  resultsTable.style.display = 'table';
});

//const bafEligible = (hasAccounting && hasRelevantSubjects && !hasTravel && !hasFood); const hmoEligible = ((hasTravel || hasFood) && hasTwoRelevantSubjects); const eligible = (bafEligible || hmoEligible);

// const adtEligible = (hasAccounting && !hasPoA && !hasTravel && !hasFood) || (!hasAccounting && hasPoA && !hasTravel && !hasFood);
//   const cngEligible = (!hasAccounting && !hasPoA && !hasTravel && !hasFood);
//   const datEligible = (!hasAccounting && !hasPoA && !hasTravel && !hasFood);
//   const damEligible = (hasTravel && !hasFood) || (!hasTravel && hasFood);
//   const wtyEligible = (hasTravel && !hasFood) || (!hasTravel && hasFood);

