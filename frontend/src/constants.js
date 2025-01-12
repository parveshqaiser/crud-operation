import { useState } from "react";

export const initialValues = {
    name : {
        value : "",
        error : ""
    },
    age : {
        value : "",
        error : ""
    },
    profession : {
        value : "",
        error : ""
    },
    state : {
        value : "",
        error : ""
    },
    city : {
        value : "",
        error : ""
    }
};

export const states = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" }
];

export const cities = [
    { value: "Amaravati", label: "Andhra Pradesh", capital: "Amaravati" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh", capital: "Itanagar" },
    { value: "Assam", label: "Assam", capital: "Dispur" },
    { value: "Bihar", label: "Bihar", capital: "Patna" },
    { value: "Chhattisgarh", label: "Chhattisgarh", capital: "Raipur" },
    { value: "Goa", label: "Goa", capital: "Panaji" },
    { value: "Gujarat", label: "Gujarat", capital: "Gandhinagar" },
    { value: "Haryana", label: "Haryana", capital: "Chandigarh" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh", capital: "Shimla" },
    { value: "Jharkhand", label: "Jharkhand", capital: "Ranchi" },
    { value: "Karnataka", label: "Karnataka", capital: "Bengaluru" },
    { value: "Kerala", label: "Kerala", capital: "Thiruvananthapuram" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh", capital: "Bhopal" },
    { value: "Maharashtra", label: "Maharashtra", capital: "Mumbai" },
    { value: "Manipur", label: "Manipur", capital: "Imphal" },
    { value: "Meghalaya", label: "Meghalaya", capital: "Shillong" },
    { value: "Mizoram", label: "Mizoram", capital: "Aizawl" },
    { value: "Nagaland", label: "Nagaland", capital: "Kohima" },
    { value: "Odisha", label: "Odisha", capital: "Bhubaneswar" },
    { value: "Punjab", label: "Punjab", capital: "Chandigarh" },
    { value: "Rajasthan", label: "Rajasthan", capital: "Jaipur" },
    { value: "Sikkim", label: "Sikkim", capital: "Gangtok" },
    { value: "Tamil Nadu", label: "Tamil Nadu", capital: "Chennai" },
    { value: "Telangana", label: "Telangana", capital: "Hyderabad" },
    { value: "Tripura", label: "Tripura", capital: "Agartala" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh", capital: "Lucknow" },
    { value: "Uttarakhand", label: "Uttarakhand", capital: "Dehradun" },
    { value: "West Bengal", label: "West Bengal", capital: "Kolkata" }
];


export const FormDetails = {
    batchDetails: [
        {
            batch: {
                value: "",
                error: "",
            },
            mrp: {
                value: "",
                error: "",
            },              
            ptr: {
                value: "",
                error: "",
            },
            qty: {
                value: "",
                error: "",
            },
        },
    ]
};

export const initialFormDetails = {
    batchDetails: [
        {
            batch: {
                value: "",
                error: "",
            },
            mrp: {
                value: "",
                error: "",
            },              
            ptr: {
                value: "",
                error: "",
            },
            qty: {
                value: "",
                error: "",
            },
        },
    ]
}


  
  