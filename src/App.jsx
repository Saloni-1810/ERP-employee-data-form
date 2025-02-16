// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    employeeId: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    employmentType: "",
    workLocation: "",
    shiftTiming: "",
    ctc: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    pfNumber: "",
    taxId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-2">Employee Data Form</h1>
        <p className="text-center text-muted mb-4">
          Please fill in all mandatory fields marked with *
        </p>

        <form className="employee-form" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="form-section">
            <h2>
              <i className="bi bi-person me-2"></i> Personal Information
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Profile Picture</label>

                <div className="upload-box col-md-6">
                  <div className="d-flex align-items-center">
                    <div className="upload-icon col-md-6">
                      <i className="bi-solid bi-image"></i>
                    </div>
                    <button className="btn btn-upload">Upload</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender *</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Current Address *</label>
                <textarea
                  className="form-control"
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <label className="form-label">Permanent Address</label>
                <textarea
                  className="form-control"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Job Information Section */}
          <div className="form-section">
            
            <h2>
              <i className="bi bi-briefcase-fill me-2"></i> Job Information
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label">Employee ID *</label>
                <input
                  type="text"
                  className="form-control"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Department *</label>
                <select
                  className="form-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option>IT</option>
                  <option>HR</option>
                  <option>Finance</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Designation *</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Date of Joining *</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Employment Type *</label>
                <div className="employment-type">
                  {["Full-time", "Part-time", "Contract"].map((type) => (
                    <div className="form-check" key={type}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="employmentType"
                        value={type}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Work Location *</label>
                <select
                  className="form-select"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option>Location A</option>
                  <option>Location B</option>
                  <option>Location C</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Shift Timing</label>
                <select
                  className="form-select"
                  name="shiftTiming"
                  value={formData.shiftTiming}
                  onChange={handleChange}
                >
                  <option value="">Select Shift</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Night</option>
                </select>
              </div>
            </div>
          </div>

          {/* Salary & Payroll Details Section */}
          <div className="form-section">
           
            <h2>
              <i className="bi bi-cash-stack me-2"></i> Salary & Payroll Details
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label">CTC (Annual) *</label>
                <input
                  type="number"
                  className="form-control"
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Bank Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Account Number *</label>
                <input
                  type="text"
                  className="form-control"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">IFSC Code *</label>
                <input
                  type="text"
                  className="form-control"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">PF Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="pfNumber"
                  value={formData.pfNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Tax ID (PAN) *</label>
                <input
                  type="text"
                  className="form-control"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
