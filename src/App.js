import React from 'react';
// import ResourceCards from './Graphics/ResourceCards.jsx';
// import ResourceList from './Data/ResourceList.json';
// import TestApi from './TestApi.js';

import RenderForm from "./Render/RenderForm.jsx";
import jsonForms from "./Forms/FormData/JrfData.json";

// var jsonForms = {
//   jsonForm: {
//     disposition: {
//       elementType: "select",
//       elementConfig: {
//         options: [
//           {
//             value: "payment",
//             displayValue: "Payment"
//           },
//           {
//             value: "returns",
//             displayValue: "Returns"
//           },
//           {
//             value: "tax deduction",
//             displayValue: "Tax Deduction"
//           }
//         ],
//         configs: {
//           variant: "outlined",
//           margin: "dense",
//           label: "Disposition *",
//           InputLabelProps: {
//             shrink: true
//           },
//           helperText: "Select Disposition"
//         }
//       },
//       value: "returns",
//       validation: {},
//       valid: true
//     },
//     sub_disposition: {
//       elementType: "select",
//       elementConfig: {
//         options: [
//           {
//             value: "login issue",
//             displayValue: "Login Issue"
//           },
//           {
//             value: "gstr 2",
//             displayValue: "GSTR 2"
//           },
//           {
//             value: "gstr 3b",
//             displayValue: "GSTR 3B"
//           }
//         ],
//         configs: {
//           variant: "outlined",
//           margin: "dense",
//           label: "Sub Disposition *",
//           InputLabelProps: {
//             shrink: true
//           },
//           helperText: "Select Sub disposition"
//         }
//       },
//       value: "gstr 3b",
//       validation: { required: true },
//       valid: true
//     },
//     ticket_status: {
//       elementType: "select",
//       elementConfig: {
//         options: [
//           {
//             value: "new",
//             displayValue: "NEW"
//           },
//           {
//             value: "closed",
//             displayValue: "CLOSED"
//           },
//           {
//             value: "inprogress",
//             displayValue: "INPROGRESS"
//           },
//           {
//             value: "awating customer response",
//             displayValue: "AWAITING CUSTOMER RESPONSE"
//           }
//         ],
//         configs: {
//           variant: "outlined",
//           margin: "dense",
//           label: "Ticket Status *",
//           InputLabelProps: {
//             shrink: true
//           },
//           helperText: "Select Ticket Status"
//         }
//       },
//       value: "new",
//       validation: { required: true },
//       valid: true
//     },
//     agent_remarks: {
//       elementType: "textarea",
//       elementConfig: {
//         variant: "outlined",
//         margin: "dense",
//         rows: 2,
//         rowsMax: 3,
//         label: "Agent Remarks *",
//         InputLabelProps: {
//           shrink: true
//         },
//         helperText: ""
//       },
//       value: "",
//       validation: { required: true },
//       valid: true
//     }
//   }
// };

function App() {
  return (
    <div className="App">
      {/* <ResourceCards resourceList = {ResourceList}/> */}
      <RenderForm json={jsonForms.jsonForm} buttonText="Update Ticket" />
      {/* <TestApi /> */}
    </div>
  );
}

export default App;
