const sub1 = document.getElementById('r1');
  const sub2 = document.getElementById('r21');
  const sub3 = document.getElementById('r22');
  
  const gra1 = document.getElementById('g4');
  const gra2 = document.getElementById('g5');
  const gra3 = document.getElementById('g6');
  
  sub1.addEventListener("change", () => {
    if(sub1.value === "CombSci"){
      for(let i=5; i<gra1.options.length; i++){
        gra1.options[i].style.display = 'none';
        console.log("ok");
      }
    }else{
      for(let i = 3; i <gra1.options.length; i++){
        gra1.options[i].style.display="";
        console.log("this");
      }
    }
  });

  sub2.addEventListener("change", () => {
    if(sub2.value === "CombSci"){
      for(let i=5; i<gra2.options.length; i++){
        gra2.options[i].style.display = 'none';
        console.log("ok");
      }
    }else{
      for(let i = 3; i <gra2.options.length; i++){
        gra2.options[i].style.display="";
        console.log("this");
      }
    }
  });

  sub3.addEventListener("change", () => {
    if(sub3.value === "CombSci"){
      for(let i=5; i<gra3.options.length; i++){
        gra3.options[i].style.display = 'none';
        console.log("ok");
      }
    }else{
      for(let i = 3; i <gra3.options.length; i++){
        gra3.options[i].style.display="";
        console.log("this");
      }
    }
  });

document.getElementById('checkEligibility').addEventListener('click', () => {
  const subject1 = document.getElementById('r1').value;
  const subject2 = document.getElementById('r21').value;
  const subject3 = document.getElementById('r22').value;

  console.log(subject1);
  console.log(subject2);
  console.log(subject3);

  const hasAmaths =  [subject1, subject2, subject3].includes("AddMaths");
  const hasBio = [subject1, subject2, subject3].includes("Bio");
  const hasChem = [subject1, subject2, subject3].includes("Chem");
  const hasCombSci =[subject1, subject2, subject3].includes("CombSci");
  const hasComm = [subject1, subject2, subject3].includes("Comm");
  const hasCommStu = [subject1, subject2, subject3].includes("CommStu");
  const hasCompStu = [subject1, subject2, subject3].includes("CompStu");
  const hasCompSci = [subject1, subject2, subject3].includes("CompSci");
  const hasDnT = [subject1, subject2, subject3].includes("DnT");
  const hasEco = [subject1, subject2, subject3].includes("Eco");
  const hasEngLit = [subject1, subject2, subject3].includes("EngLit");
  const hasFaN = [subject1, subject2, subject3].includes("FaN");
  const hasGeo = [subject1, subject2, subject3].includes("Geo");
  const hasHist = [subject1, subject2, subject3].includes("Hist");
  const hasICT = [subject1, subject2, subject3].includes("ict");
  const hasPoA = [subject1, subject2, subject3].includes("POA");
  const hasSocio = [subject1, subject2, subject3].includes("Socio");
  const hasStat = [subject1, subject2, subject3].includes("Stat");
  const hasTaT = [subject1, subject2, subject3].includes("TaT");
  const hasPhy = [subject1, subject2, subject3].includes("Phy");
 
  const mathsD=document.getElementById('g2-1').value;

  const gender = document.getElementById('gender').value;

  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  console.log(weight);
  console.log(height);

  const bmi = (weight/height/height)*10000;
  const bmiFixed = bmi.toFixed(2);
  console.log(bmiFixed);
  document.getElementById('BMI').textContent = bmiFixed;

  const MostRel = (hasBio||hasChem||hasCombSci||hasPhy);
  const Rel = (hasAmaths||hasBio||hasChem||hasCombSci||hasComm||hasCompSci||hasCompStu||hasCommStu||hasDnT||hasEco||hasEngLit||hasFaN||hasGeo||hasHist||hasICT||hasPoA||hasSocio||hasStat||hasTaT||hasPhy);

  const shsEligible = (mathsD<=4 && (MostRel&&Rel && Rel) && gender === 'female');
  const nurseEligible = (mathsD<=4 && (MostRel&&Rel && Rel));
  const paraEligible = (mathsD<=4 && (MostRel&&Rel && Rel) && height>155 && bmi >=18 && bmi <=25);
  const cardioEligible = (mathsD<=4 && (MostRel&&Rel && Rel));
  const publicEligible = (mathsD<=4 && (MostRel&&Rel && Rel));

  document.getElementById('shsResult').textContent = shsEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('nurseResult').textContent = nurseEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('paraResult').textContent = paraEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('cardioResult').textContent = cardioEligible ? 'Eligible' : 'Not Eligible';
  document.getElementById('publicResult').textContent = publicEligible ? 'Eligible' : 'Not Eligible';

  
  const resultsTable = document.getElementById('resultsTable');
  resultsTable.style.display = 'table';
});
