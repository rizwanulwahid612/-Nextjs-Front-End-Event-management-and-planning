
// "use client";
// import Form from "@/components/Forms/Form";
// import FormDatePicker from "@/components/Forms/FormDatePicker";
// import FormInput from "@/components/Forms/FormInput";
// import FormSelectField from "@/components/Forms/FormSelectField";
// import FormTextArea from "@/components/Forms/FormTextArea";
// import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
// //import UploadImage from "@/components/ui/UploadImage.tsx/UploadImage";
// import { selectBloodGroupOptions, selectorGenderOptions } from "@/constants/selectConstantOptions";

// import { useAddAdminDataMutation } from "@/redux/api/adminApi";

// import { useDepartmentsQuery } from "@/redux/api/departmentApi";
// import { adminSchema } from "@/schemas/admin";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button, Col, Row, message } from "antd";
// import { useState } from "react";



// const CreateAdminPage = () => {
   
//   const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });
//   const [addAdminData] = useAddAdminDataMutation();
//   //@ts-ignore
//   const departments: IDepartment[] = data?.departments;

//   const departmentOptions =
//     departments &&
//     departments?.map((department) => {
//       return {
//         label: department?.title,
//         value: department?.id,
//       };
//     });
//     const [image, setImage] = useState<File | null>(null);
// //  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files.length > 0) {
// //       const uploadedImage = e.target.files[0];
// //       setImage(uploadedImage);
// //     }
// //   };
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const uploadedImage = e.target.files[0];
//       setImage(uploadedImage);
//     }
//   };
//   const onSubmit = async (values: any) => {
//     console.log(values)
//     const obj = { ...values };
  
//      const formData = new FormData();
//     if (image) {
//       formData.append("file", image); // Assuming 'file' is the correct key for Cloudinary
//       formData.append("upload_preset", "kgesjxl2");
//       formData.append("cloud_name", "dke0j7xmt");
//     }
//      try {
//       // Uploading image to Cloudinary
//       const cloudinaryResponse = await fetch(
//         "https://api.cloudinary.com/v1_1/dke0j7xmt/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const cloudinaryData = await cloudinaryResponse.json();
//       console.log(cloudinaryData); // Cloudinary response

//       // Posting form data
//       await addAdminData(values); // Assuming 'addAdminData' function is correctly handling form data
//       message.success("Admin created successfully!");
//     } catch (err: any) {
//       console.error(err.message);
//     }
//     message.loading("Creating...");
     
//     try {
//       // await addAdminData(formData);
//       // console.log(formData)
//         await addAdminData(obj);
//       console.log(obj)
//       message.success("Admin created successfully!");
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div>
//       <EMBreadCrumb
//         items={[
//           {
//             label: "admin",
//             link: "/admin",
//           },
//           {
//             label: "admin",
//             link: "admin",
//           },
//         ]}
//       />
//       <h1>Create Admin</h1>

//       <div>
//         <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
//           <div
//             style={{
//               border: "1px solid #d9d9d9",
//               borderRadius: "5px",
//               padding: "15px",
//               marginBottom: "10px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "18px",
//                 marginBottom: "10px",
//               }}
//             >
//               Admin Information
//             </p>
//             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.name.firstName"
//                   size="large"
//                   label="First Name"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.name.middleName"
//                   size="large"
//                   label="Middle Name"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.name.lastName"
//                   size="large"
//                   label="Last Name"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="password"
//                   name="password"
//                   size="large"
//                   label="Password"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
     
//         {/* Your existing form fields */}
//         <FormInput
//           type="file"
//           onChange={handleImageChange} // Update here to the renamed function
//           name="admin.profileImage"
//           size="large"
//           label="Profile Image"
//         />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormSelectField
//                   size="large"
//                   name="admin.gender"
//                   options={selectorGenderOptions}
//                   label="Gender"
//                   placeholder="Select"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormSelectField
//                   size="large"
//                   name="admin.managementDepartment"
//                   options={departmentOptions}
//                   label="Department"
//                   placeholder="Select"
//                 />
//               </Col>
//               {/* <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <UploadImage name="file" />
//               </Col> */}
//             </Row>
//           </div>

//           {/* basic info */}
//           <div
//             style={{
//               border: "1px solid #d9d9d9",
//               borderRadius: "5px",
//               padding: "15px",
//               marginBottom: "10px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "18px",
//                 marginBottom: "10px",
//               }}
//             >
//               Basic Information
//             </p>
//             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="email"
//                   name="admin.email"
//                   size="large"
//                   label="Email address"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.contactNo"
//                   size="large"
//                   label="Contact No."
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.emergencyContactNo"
//                   size="large"
//                   label="Emergency Contact No."
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormDatePicker
//                   name="admin.dateOfBirth"
//                   label="Date of birth"
//                   size="large"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormSelectField
//                   size="large"
//                   name="admin.bloodGroup"
//                   options={selectBloodGroupOptions}
//                   label="Blood group"
//                   placeholder="Select"
//                 />
//               </Col>
//               <Col
//                 className="gutter-row"
//                 span={8}
//                 style={{
//                   marginBottom: "10px",
//                 }}
//               >
//                 <FormInput
//                   type="text"
//                   name="admin.designation"
//                   size="large"
//                   label="Designation"
//                 />
//               </Col>
//               <Col span={12} style={{ margin: "10px 0" }}>
//                 <FormTextArea
//                   name="admin.presentAddress"
//                   label="Present address"
//                   rows={4}
//                 />
//               </Col>

//               <Col span={12} style={{ margin: "10px 0" }}>
//                 <FormTextArea
//                   name="admin.permanentAddress"
//                   label="Permanent address"
//                   rows={4}
//                 />
//               </Col>
//             </Row>
//           </div>
//           <Button htmlType="submit" type="primary">
//             Create
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default CreateAdminPage;










"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
//import UploadImage from "@/components/ui/UploadImage.tsx/UploadImage";
import { selectBloodGroupOptions, selectorGenderOptions } from "@/constants/selectConstantOptions";

import { useAddAdminDataMutation } from "@/redux/api/adminApi";

import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";



const CreateAdminPage = () => {
  const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });
  const [addAdminData] = useAddAdminDataMutation();
  //@ts-ignore
  const departments: IDepartment[] = data?.departments;

  const departmentOptions =
    departments &&
    departments?.map((department) => {
      return {
        label: department?.title,
        value: department?.id,
      };
    });

  const onSubmit = async (values: any) => {
    console.log(values)
    const obj = { ...values };
    //const file = obj["file"];
    //delete obj["file"];
   // const data = JSON.stringify(obj);
    // const formData = new FormData();
    // console.log(formData)
    //formData.append("file", file as Blob);
    // formData.append("data", data);
     message.loading("Creating...");
    try {
      // await addAdminData(formData);
      // console.log(formData)
        await addAdminData(obj);
      console.log(obj)
      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <EMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              {/* <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="file"
                  name="admin.profileImage"
                  size="large"
                  label="Profile Image"
                />
              </Col> */}
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.gender"
                  options={selectorGenderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.managementDepartment"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select"
                />
              </Col>
              {/* <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" />
              </Col> */}
            </Row>
          </div>

          {/* basic info */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email address"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={selectBloodGroupOptions}
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;