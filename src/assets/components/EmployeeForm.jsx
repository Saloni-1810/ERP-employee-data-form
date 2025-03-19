// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./EmployeeForm.module.css";

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
      <div className={`container my-5 ${styles.containerForm}`}>
        <h1 className={`${styles.textCenter} mb-2`}>Employee Data Form</h1>
        <p className={`${styles.textMuted} mb-4`}>
          Please fill in all mandatory fields marked with *
        </p>

        <form className={styles.employeeForm} onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className={styles.formSection}>
            <h2>
              <i className="bi bi-person me-2"></i> Personal Information
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className={styles.formLabel}>Full Name *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Profile Picture</label>

                <div className={`${styles.uploadBox} col-md-6`}>
                  <div className="d-flex align-items-center">
                    <div className={`${styles.uploadIcon} col-md-6`}>
                      <i className="bi-solid bi-image"></i>
                    </div>
                    <button className={`${styles.btnUpload} btn`}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Date of Birth *</label>
                <input
                  type="date"
                  className={styles.formControl}
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Gender *</label>
                <select
                  className={styles.formSelect}
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
                <label className={styles.formLabel}>Contact Number *</label>
                <input
                  type="tel"
                  className={styles.formControl}
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Email Address *</label>
                <input
                  type="email"
                  className={styles.formControl}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className={styles.formLabel}>Current Address *</label>
                <textarea
                  className={styles.formControl}
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <label className={styles.formLabel}>Permanent Address</label>
                <textarea
                  className={styles.formControl}
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Job Information Section */}
          <div className={styles.formSection}>
            <h2>
              <i className="bi bi-briefcase-fill me-2"></i> Job Information
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className={styles.formLabel}>Employee ID *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Department *</label>
                <select
                  className={styles.formSelect}
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
                <label className={styles.formLabel}>Designation *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Date of Joining *</label>
                <input
                  type="date"
                  className={styles.formControl}
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className={styles.formLabel}>Employment Type *</label>
                <div className={styles.employmentType}>
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
                <label className={styles.formLabel}>Work Location *</label>
                <select
                  className={styles.formSelect}
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
                <label className={styles.formLabel}>Shift Timing</label>
                <select
                  className={styles.formSelect}
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
          <div className={styles.formSection}>
            <h2>
              <i className="bi bi-cash-stack me-2"></i> Salary & Payroll Details
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <label className={styles.formLabel}>CTC (Annual) *</label>
                <input
                  type="number"
                  className={styles.formControl}
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Bank Name *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Account Number *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>IFSC Code *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>PF Number</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="pfNumber"
                  value={formData.pfNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Tax ID (PAN) *</label>
                <input
                  type="text"
                  className={styles.formControl}
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.formButtons}>
            <button type="button" className={`${styles.btnLight} btn`}>
              Cancel
            </button>
            <button type="submit" className={`${styles.btnPrimary} btn`}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeForm;
