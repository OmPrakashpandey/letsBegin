import { Injectable } from '@angular/core';
import { HttpService } from './http.service'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  localConfig: any = {
    copyrightDate: new Date(),
    companyName: "EMW Technologies",
    companyUrl: "",
    agGridProps: {
      theme: 'ag-theme-balham',//ag-theme-blue ag-theme-alpine
      height: "430px",
    },
    mobNumberPattern: "^((\\+91-?)|0)?[0-9]{10}$",
    emailIdPattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
    dob: "",
    fatherName: "",
    name: "Name",
    languagesknown: "Languages Known",
    qualification: "Qualification",
    institute: "Institute",
    board: "Board",
    bloodGroup: "Blood Group",
    academicYear: "Academic Year",
   // medicalHistory: "Medical History If Any",
    uploadImage:"Choose Image For Photo",
    update:"Update",
    permanentAddress: "Permanent Address",
    experiance: "Experiance/If/any",
    subject: "Subject",
    designation: "Designation",
    staffId: "Staff ID", 
    age: "Age",
    educationalDetail: "Educational Detail",
    personalachievement: "Personal Achievement",
    uploaddocument: "Upload Document",
    adhar: "ID Proof",
    pan: "Pan",
    AdharPan: "Address Proof/ID",
    idProof:"Aadhar/DL/Passsport/VoterId",
    staffRegistration: "Staff Registration",
    Upload: "Upload",
    course: "Course",
    stream: "Stream",
    marksInPercent: "Marks In Percentage",
    document: "Select Document", cid: "Class ID", class: "Class", ethnicity: "Ethincity",
    marksgrade: "Marks In %",
    gender: "Gender",
    section: "Section",
    id: "ID",
    alternateMobile: "",
    fathername: "Father Name",

    save:"Save",
    reset:"Reset",
    instituteName:" Name",
    instituteAddress:" Address",
    instituteLogo:" Logo",
    institutePhone:"Phone",

    instituteEmail:" Email",
    instituteMobile:" Mobile",
    instituteAdminConPer:" Admin Contact Person",
    instituteCountry:" Country",
    instituteCurrency:" Currency",
    instituteLanguage:" Language",
    instituteTimeZone:" TimeZone",
    instituteId:"Institute Id",

   pincode:"Pincode",
   code:"Code",
   country:"Country",

   timeZone:"TimeZone",
   currency:"Currency",
   language:"Language",
   default:"Default",
   remark:"Remark",
   email:"Email",
   
pdf:"PDF File",
type:"Type",
url:"URL",
description:"Description",
fee:"Fee",
sId:"Student Id",
month:"Month",
feeWaiver:"fee Waiver",
ammount:"Ammount",

quesPaper:"Question Paper",
answer:"Answer",
question:"Question",
option:"Option",

classRoom:"Class Room",
roomNo:" Room Number",
teacher:"Teacher",
timeFrom:"Time From",
timeTo:"Time To",
examDuration:"Exam Duration",
contentType:"Content-Type",
day:"Day",

parentsName:"Parent Name",
parentsMobile:"Parent Mobile",

title:"Bank Title",
bankName:"Bank Name",
bankBranch:"Bank Branch Name",
bankAccountNo:"Bank Account Number",
ifsc:"IFSC Code",
accountDetail:"Account Detail",
totalQuestion:"Total Question",
profile:"Profile",
role:"Role Name",
examTime:"Exam Time",
onlineExam:"Online Exam",
questionType:"Question Type",

password:"Password",
  }
  config: any;
  //regexemailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  constructor(private http: HttpService) { }

  loadConfig() {
    return this.http.get('lang/en')
      .then(config => {
        this.config = Object.assign(this.localConfig, config);
      });
  }
}
