import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const arrayToObject = (array) => {
  let resultObj = {}

  for (let i = 0; i < array.length; i++) {
    let keys = Object.keys(array[i])
    let values = Object.values(array[i])

    for (let x in values) {
      resultObj[keys] = values[x]
    }
  }
  return resultObj
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body)
    const { patientInfo, historyInfo, detailedInfo, symptomInfo, femaleInfo, medicalRelease, agreementInfo } = arrayToObject(body)
    
    const maleHistory = `
    <h3>PATIENT INFORMATION</h3>\r\n
    Date: ${patientInfo.date}\r\n
    Name: ${patientInfo.name}\r\n
    Date of Birth: ${patientInfo.dob}\r\n
    Sex: ${patientInfo.sex}\r\n
    Address: ${patientInfo.address}\r\n
    City: ${patientInfo.city}\r\n
    State: ${patientInfo.state}\r\n
    Zipcode: ${patientInfo.zipcode}\r\n
    Phone: ${patientInfo.phone}\r\n
    Email: ${patientInfo.email}\r\n
    Primary Doctor: ${patientInfo.physician}\r\n
    Primary Doctor Phone: ${patientInfo.doctorsPhone}\r\n
    <h3>HISTORY INFORMATION</h3>\r\n
    <h4>Social History</h4>\r\n
    Do you Drink? ${historyInfo.drink} - ${historyInfo.numberDrink} Times per week\r\n
    Do you Smoke? ${historyInfo.smoke} - ${historyInfo.numberSmoke} Times per day\r\n
    Do you Exercise? ${historyInfo.exercise} - ${historyInfo.numberExercise} Times per week\r\n
    <h4>Medical History</h4>\r\n
    Heart Attack/Heart Failure: ${historyInfo.heart}\r\n
    Ortho, fracture, joint or muscle disorder: ${historyInfo.ortho}\r\n
    Anxiety: ${historyInfo.anxiety}\r\n
    Hypertension: ${historyInfo.hypertension}\r\n
    Thyroid Problems: ${historyInfo.thyroid}\r\n
    Asthma/COPD: ${historyInfo.asthma}\r\n
    Erectile Dysfunction: ${historyInfo.ed}\r\n
    Cancer: ${historyInfo.cancer}\r\n
    Renal Disease: ${historyInfo.renal}\r\n
    Allergies to Medications: ${historyInfo.allergies}\r\n
    Back Problems/Injuries: ${historyInfo.back}\r\n
    Cholesterol Problems: ${historyInfo.cholesterol}\r\n
    Liver Disease: ${historyInfo.liver}\r\n
    Fibromyalgia: ${historyInfo.fibromyalgia}\r\n
    Diabetes: ${historyInfo.diabetes}\r\n
    Anemia: ${historyInfo.anemia}\r\n
    EXPLAINATION OF CHECKED BOXES: ${historyInfo.medicalHistory}\r\n
    <h4>Family History</h4>\r\n
    Stroke: ${historyInfo.famStroke}\r\n
    Anemia: ${historyInfo.famAnemia}\r\n
    Diabetes: ${historyInfo.famDiabetes}\r\n
    Cancer: ${historyInfo.famCancer}\r\n
    Thyroid Disease: ${historyInfo.famThyroidDisease}\r\n
    Heart Attack: ${historyInfo.famHeartAttack}\r\n
    High Blood Pressure: ${historyInfo.famHighBP}\r\n
    High Cholesterol: ${historyInfo.famHighCholesterol}\r\n
    Heart Disease: ${historyInfo.HeartDisease}\r\n
    Osteoporosis: ${historyInfo.osteoporosis}\r\n
    Other: ${historyInfo.famOtherHistory}\r\n
    <h3>HISTORY DETAILS</h3>\r\n
    LIST ALL HOSPITALIZATIONS/SURGERIES THAT YOU'VE HAD PERFORMED:\r\n
    ${detailedInfo.hospitalizations}\r\n
    LIST ALL MEDICATIONS YOU ARE CURRENTLY TAKING:\r\n
    ${detailedInfo.medications}\r\n
    LIST ALL VITAMIN/MINERAL SUPPLEMENTS(INCLUDING OTC) YOU ARE TAKING:\r\n
    ${detailedInfo.vitamins}\r\n
    <h3>SYMPTOMS</h3>\r\n
    Decreased desire and ability to exercise: ${symptomInfo.decreasedDesire}\r\n
    Decreased sense of well being: ${symptomInfo.decreasedWellBeing}\r\n
    Cold or heat intolerance: ${symptomInfo.coldHeatIntolerance}\r\n
    Loss of interest in sex/low libido: ${symptomInfo.lowLibido}\r\n
    Loss of concentration, sociability, activity: ${symptomInfo.lossConcentration}\r\n
    Difficulty sleeping: ${symptomInfo.difficultySleeping}\r\n
    Increased fat deposits abdomen and/or thighs: ${symptomInfo.increasingFat}\r\n
    Thinning or loss of hair: ${symptomInfo.hairLoss}\r\n
    Weight loss - unexplained: ${symptomInfo.unexplainedWeightLoss}\r\n
    Hot flashes: ${symptomInfo.hotFlashes}\r\n
    Decreased energy or endurance: ${symptomInfo.decreasedEnergy}\r\n
    Increasingly stressed: ${symptomInfo.stressed}\r\n
    Decreasing muscle strength: ${symptomInfo.decreasedStrength}\r\n
    Depression: ${symptomInfo.depression}\r\n
    Muscle loss: ${symptomInfo.muscleLoss}\r\n
    Headaches/Migraines: ${symptomInfo.migraines}\r\n
    Currently pregnant: ${symptomInfo.pregnant}\r\n
    Other: ${symptomInfo.otherSymptom}\r\n
    <h3>MEDICAL RELEASE</h3>\r\n
    Authorized Release: ${medicalRelease.medicalRelease}\r\n
    Name: ${medicalRelease.name}\r\n
    <h3>TREATMENT AGREEMENT</h3>\r\n
    Agreed to Treatment: ${agreementInfo.treatmentAgreement}\r\n
    Name: ${agreementInfo.name}\r\n
    \r\n
    \r\n
    `
    const femaleHistory = `
    <h3>PATIENT INFORMATION</h3>\r\n
    Date: ${patientInfo.date}\r\n
    Name: ${patientInfo.name}\r\n
    Date of Birth: ${patientInfo.dob}\r\n
    Sex: ${patientInfo.sex}\r\n
    Address: ${patientInfo.address}\r\n
    City: ${patientInfo.city}\r\n
    State: ${patientInfo.state}\r\n
    Zipcode: ${patientInfo.zipcode}\r\n
    Phone: ${patientInfo.phone}\r\n
    Email: ${patientInfo.email}\r\n
    Primary Doctor: ${patientInfo.physician}\r\n
    Primary Doctor Phone: ${patientInfo.doctorsPhone}\r\n
    <h3>HISTORY INFORMATION</h3>\r\n
    <h4>Social History</h4>\r\n
    Do you Drink? ${historyInfo.drink} - ${historyInfo.numberDrink} Times per week\r\n
    Do you Smoke? ${historyInfo.smoke} - ${historyInfo.numberSmoke} Times per day\r\n
    Do you Exercise? ${historyInfo.exercise} - ${historyInfo.numberExercise} Times per week\r\n
    <h4>Medical History</h4>\r\n
    Heart Attack/Heart Failure: ${historyInfo.heart}\r\n
    Ortho, fracture, joint or muscle disorder: ${historyInfo.ortho}\r\n
    Anxiety: ${historyInfo.anxiety}\r\n
    Hypertension: ${historyInfo.hypertension}\r\n
    Thyroid Problems: ${historyInfo.thyroid}\r\n
    Asthma/COPD: ${historyInfo.asthma}\r\n
    Erectile Dysfunction: ${historyInfo.ed}\r\n
    Cancer: ${historyInfo.cancer}\r\n
    Renal Disease: ${historyInfo.renal}\r\n
    Allergies to Medications: ${historyInfo.allergies}\r\n
    Back Problems/Injuries: ${historyInfo.back}\r\n
    Cholesterol Problems: ${historyInfo.cholesterol}\r\n
    Liver Disease: ${historyInfo.liver}\r\n
    Fibromyalgia: ${historyInfo.fibromyalgia}\r\n
    Diabetes: ${historyInfo.diabetes}\r\n
    Anemia: ${historyInfo.anemia}\r\n
    EXPLAINATION OF CHECKED BOXES: ${historyInfo.medicalHistory}\r\n
    <h4>Family History</h4>\r\n
    Stroke: ${historyInfo.famStroke}\r\n
    Anemia: ${historyInfo.famAnemia}\r\n
    Diabetes: ${historyInfo.famDiabetes}\r\n
    Cancer: ${historyInfo.famCancer}\r\n
    Thyroid Disease: ${historyInfo.famThyroidDisease}\r\n
    Heart Attack: ${historyInfo.famHeartAttack}\r\n
    High Blood Pressure: ${historyInfo.famHighBP}\r\n
    High Cholesterol: ${historyInfo.famHighCholesterol}\r\n
    Heart Disease: ${historyInfo.HeartDisease}\r\n
    Osteoporosis: ${historyInfo.osteoporosis}\r\n
    Other: ${historyInfo.famOtherHistory}\r\n
    <h3>HISTORY DETAILS</h3>\r\n
    LIST ALL HOSPITALIZATIONS/SURGERIES THAT YOU'VE HAD PERFORMED:\r\n
    ${detailedInfo.hospitalizations}\r\n
    LIST ALL MEDICATIONS YOU ARE CURRENTLY TAKING:\r\n
    ${detailedInfo.medications}\r\n
    LIST ALL VITAMIN/MINERAL SUPPLEMENTS(INCLUDING OTC) YOU ARE TAKING:\r\n
    ${detailedInfo.vitamins}\r\n
    <h3>SYMPTOMS</h3>\r\n
    Decreased desire and ability to exercise: ${symptomInfo.decreasedDesire}\r\n
    Decreased sense of well being: ${symptomInfo.decreasedWellBeing}\r\n
    Cold or heat intolerance: ${symptomInfo.coldHeatIntolerance}\r\n
    Loss of interest in sex/low libido: ${symptomInfo.lowLibido}\r\n
    Loss of concentration, sociability, activity: ${symptomInfo.lossConcentration}\r\n
    Difficulty sleeping: ${symptomInfo.difficultySleeping}\r\n
    Increased fat deposits abdomen and/or thighs: ${symptomInfo.increasingFat}\r\n
    Thinning or loss of hair: ${symptomInfo.hairLoss}\r\n
    Weight loss - unexplained: ${symptomInfo.unexplainedWeightLoss}\r\n
    Hot flashes: ${symptomInfo.hotFlashes}\r\n
    Decreased energy or endurance: ${symptomInfo.decreasedEnergy}\r\n
    Increasingly stressed: ${symptomInfo.stressed}\r\n
    Decreasing muscle strength: ${symptomInfo.decreasedStrength}\r\n
    Depression: ${symptomInfo.depression}\r\n
    Muscle loss: ${symptomInfo.muscleLoss}\r\n
    Headaches/Migraines: ${symptomInfo.migraines}\r\n
    Currently pregnant: ${symptomInfo.pregnant}\r\n
    Other: ${symptomInfo.otherSymptom}\r\n
    <h3>FEMALE SYMPTOMS</h3>\r\n
    Fibromyalgia: ${femaleInfo?.femFibromyalgia}\r\n
    Ovarian Cysts: ${femaleInfo?.femOvarianCysts}\r\n
    Uterine Fibroids: ${femaleInfo?.femOvarianCysts}\r\n
    Night Sweats: ${femaleInfo?.femNightSweats}\r\n
    Dry Skin: ${femaleInfo?.femDrySkin}\r\n
    Mood Swings: ${femaleInfo?.femMoodSwings}\r\n
    Water Retention: ${femaleInfo?.femWaterRetention}\r\n
    Migraines: ${femaleInfo?.femMigraines}\r\n
    Osteoporosis/Osteopenia: ${femaleInfo?.femOsteoporosis}\r\n
    Hot Flashes: ${femaleInfo?.femHotFlashes}\r\n
    Vaginal Dryness: ${femaleInfo?.femVaginalDryness}\r\n
    Dry Hair: ${femaleInfo?.femDryHair}\r\n
    Breast Tenderness: ${femaleInfo?.femBreastTenderness}\r\n
    Have you ever had a Hysterectomy? ${femaleInfo?.hysterectomySurgery}\r\n
    Hysterectomy Date: ${femaleInfo?.hysterectomyDate}\r\n
    Hysterectomy Type: ${femaleInfo?.hysterectomyType}\r\n
    Hysterectomy Reason: ${femaleInfo?.hysterectomyReason}\r\n
    If no, give date of your last menstral period.\r\n
    Menstral Date: ${femaleInfo?.menstralCycleDate}\r\n
    Has it changed from its normal cycle? ${femaleInfo?.menstralChange}\r\n
    How has it changed? (Ex. Heavier, lighter, longer, shorter) ${femaleInfo?.menstralChangedHow}\r\n
    Tubal ligation? ${femaleInfo?.tubalLigation}\r\n
    Tubal ligation Date: ${femaleInfo?.tubalLigationDate}\r\n
    LIST ANY PRESCRIPTION HORMONE MEDICATIONS YOU HAVE TAKEN, AND FOR HOW LONG.\r\n
    ${femaleInfo?.hormoneMeds}\r\n
    LIST ANY FAMILY MEMBERS WHO HAVE A HISTORY OF BREAST, UTERINE, OVARIAN OR CERVICAL CANCER.\r\n
    ${femaleInfo?.femaleCancer}\r\n
    PROVIDE DATE AND DETAILS ABOUT ANY ABNORMAL MAMMOGRAMS YOU MAY HAVE HAD.\r\n
    ${femaleInfo?.mammograms}\r\n
    PROVIDE DATE AND DETAILS ABOUT ANY ABNORMAL PAP SMEAR TESTS YOU MAY HAVE HAD.\r\n
    ${femaleInfo?.papSmear}\r\n
    HOW MANY TIMES HAVE YOU GIVEN BIRTH? ${femaleInfo?.givenBirth}\r\n
    HOW MANY MISCARRIAGES, IF ANY? ${femaleInfo?.miscarriages}\r\n
    ARE YOU CURRENTLY PREGNANT? ${femaleInfo?.currentlyPregnant}\r\n
    IS THERE ANYTHING ELSE WE DIDN'T ASK YOU THAT YOU WOULD LIKE US TO KNOW?\r\n
    ${femaleInfo?.anythingElseFemale}\r\n
    <h3>MEDICAL RELEASE</h3>\r\n
    Authorized Release: ${medicalRelease.medicalRelease}\r\n
    Name: ${medicalRelease.name}\r\n
    <h3>TREATMENT AGREEMENT</h3>\r\n
    Agreed to Treatment: ${agreementInfo.treatmentAgreement}\r\n
    Name: ${agreementInfo.name}\r\n
    \r\n
    \r\n
    `
    const thanks = `<h3>Hi ${patientInfo.name},\r\n
    \r\n
     We have received your Medical History Forms and will be uploading your forms for the doctor.\r\n
     Your advisor will contact you regarding completing and/or updating your records.\r\n
     \r\n
     Thank You,\r\n
     \r\n
     BLUGENIX\r\n</h3>
     `;
    const maleData = [
      {
        to: "jesseblue4242@gmail.com",
        from: "chris.blugenix@gmail.com",
        subject: "Medical History Form",
        text: maleHistory,
        html: maleHistory.replace(/\r\n/g, "<br>"),
      },
      {
        to: patientInfo.email,
        from: "chris.blugenix@gmail.com",
        subject: "Medical History Form Received",
        text: thanks,
        html: thanks.replace(/\r\n/g, "<br>"),
      },
    ];
    const femaleData = [
      {
        to: "jesseblue4242@gmail.com",
        from: "chris.blugenix@gmail.com",
        subject: "Medical History Form",
        text: femaleHistory,
        html: femaleHistory.replace(/\r\n/g, "<br>"),
      },
      {
        to: patientInfo.email,
        from: "chris.blugenix@gmail.com",
        subject: "Medical History Form Received",
        text: thanks,
        html: thanks.replace(/\r\n/g, "<br>"),
      },
    ];

    if (patientInfo.sex === "male") {
      await sgMail.send(maleData).then(() => {
        console.log("emails sent successfully");
      }).catch((error) => {
        console.log(error);
      })
      res.status(200).json({ status: "Ok" })
    } else {
      await sgMail.send(femaleData).then(() => {
        console.log("emails sent successfully");
      }).catch((error) => {
        console.log(error)
      })
      res.status(200).json({ status: "Ok" })
    }
  }
}