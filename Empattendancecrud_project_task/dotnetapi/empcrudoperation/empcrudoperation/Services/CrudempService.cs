using Dapper;
using empcrudoperation.Interface;
using empcrudoperation.Model;
using empcrudoperation.utility;

namespace empcrudoperation.Services
{
    public class CrudempService:ICrudemp
    {
        private readonly DBGateway _DBGateway;
        public CrudempService(string connection)
        {
            _DBGateway = new DBGateway(connection);
        }

        public async Task<ResultModel<object>> Getcrud()
        {
            ResultModel<object> result = new ResultModel<object>();

            try
            {
                var employees = await _DBGateway.ExeQueryList<Crudemp>("SELECT * FROM md_employee", null);

                if (employees != null && employees.Any())
                {
                    result.Message = "Data retrieved from database";
                    result.Data = employees;
                    result.Success = true;
                }
                else
                {
                    result.Message = "No data found";
                    result.Data = null;
                    result.Success = false;
                }
            }
            catch (Exception ex)
            {
                result.Message = $"Error while retrieving data: {ex.Message}";
                result.Data = null;
                result.Success = false;
            }

            return result;
        }




        public async Task<ResultModel<object>> GetEmployeeById(int empid)
        {
            ResultModel<object> result = new ResultModel<object>();

            try
            {
                var query = "SELECT * FROM md_employee WHERE empid = @empid";
                var parameters = new DynamicParameters();
                parameters.Add("@empid", empid);

                var employee = await _DBGateway.ExeQueryList<Crudemp>(query, parameters);

                if (employee != null)
                {
                    result.Success = true;
                    result.Message = "Employee data retrieved successfully.";
                    result.Data = employee;
                }
                else
                {
                    result.Success = false;
                    result.Message = "No employee found with the given ID.";
                    result.Data = null;
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = $"Error while fetching employee: {ex.Message}";
                result.Data = null;
            }

            return result;
        }



        public async Task<ResultModel<object>> InsertCrud(Crudemp model)
        {
            ResultModel<object>result = new ResultModel<object>();
            try
            {
                var query = "INSERT INTO md_employee (firstname, lastname, dob,gender,qualification,email,phonenumber,isactive) VALUES (@firstname, @lastname, @dob,@gender,@qualification,@email,@phonenumber,@isactive);";
                var parameters = new DynamicParameters();
                parameters.Add("@firstname", model.firstname);
                parameters.Add("@lastname", model.lastname);
                parameters.Add("@dob", model.dob);
                parameters.Add("@gender", model.gender);
                parameters.Add("@qualification", model.qualification);
                parameters.Add("@email", model.email);
                parameters.Add("@phonenumber", model.phonenumber);
                parameters.Add("@isactive", model.isactive);

                var userId = await _DBGateway.ExecuteScalarQueryAsync<int>(query, parameters);

                if (userId !=null)
                {
                    result.Success = true;
                    result.Message = "data inserted Successfully";
                    result.Data = userId;
                }
                else
                {
                   result.Success= false;
                   result.Message = "data insertion failed";
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = ex.Message;
            }
            return result;
        }


        public async Task<ResultModel<object>> UpdateCrud(Crudemp model)
        {
            ResultModel<object> result = new ResultModel<object>();
            try
            {
                var query = "UPDATE md_employee SET firstname = @firstname, lastname = @lastname, dob = @dob, gender=@gender, qualification=@qualification,email=@email, phonenumber=@phonenumber, isactive=@isactive  WHERE empid = @empid";
                var par = new DynamicParameters();
                par.Add("@empid", model.empid);
                par.Add("@firstname", model.firstname);
                par.Add("@lastname", model.lastname);
                par.Add("@dob", model.dob);
                par.Add("@gender", model.gender);
                par.Add("@qualification", model.qualification);
                par.Add("@email", model.email);
                par.Add("@phonenumber", model.phonenumber);
                par.Add("@isactive", model.isactive);

                var userdata = await _DBGateway.ExecuteAsync(query, par);

                if (userdata != null)
                {
                    result.Success = true;
                    result.Message = "data update Successfully";
                    result.Data = userdata;
                }
                else
                {
                    result.Success = false;
                    result.Message = "data updation failed";
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = ex.Message;
            }
            return result;
        }



        public async Task<ResultModel<object>> DeleteCrud(int empid)
        {
            ResultModel<object>result = new ResultModel<object>();
            try
            {
                var query = "DELETE FROM md_employee WHERE empid = @empid";
                var par = new DynamicParameters();
                par.Add("@empid", empid);

                var userdata = await _DBGateway.ExecuteAsync(query, par);

                if (userdata != null)
                {
                    result.Success = true;
                    result.Message = "data Delete Successfully";
                    result.Data = userdata;
                }
                else
                {
                    result.Success = false;
                    result.Message = "data Deletion failed";
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = ex.Message;
            }
            return result;
        }



        public async Task<ResultModel<object>> getattendancedata()
        {
            ResultModel<object> result = new ResultModel<object>();

            try
            {
                var query = @"SELECT a.empid,a.timein,a.timeout,a.total,a.status, e.firstname,e.lastname, CASE WHEN e.isactive = 1 THEN 1 ELSE 0 END AS isactive FROM mp_attendance a INNER JOIN md_employee e ON a.empid = e.empid";
                var attendanceData = await _DBGateway.ExeQueryList<attendance>(query, null);

                if (attendanceData != null && attendanceData.Any())
                {
                    result.Success = true;
                    result.Message = "Active employee attendance data retrieved successfully.";
                    result.Data = attendanceData;
                }
                else
                {
                    result.Success = false;
                    result.Message = "No active employee attendance data found.";
                    result.Data = null;
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = $"Error while retrieving data: {ex.Message}";
                result.Data = null;
            }

            return result;
        }


        public async Task<ResultModel<object>> UpdateAttendance(attendance model, string firstname, string lastname)
        {
            ResultModel<object> result = new ResultModel<object>();
            try
            {
                var empQuery = @"SELECT empid FROM md_employee WHERE firstname = @firstname AND lastname = @lastname";
                var empParameters = new DynamicParameters();
                empParameters.Add("@firstname", firstname);
                empParameters.Add("@lastname", lastname);

                int? empid = await _DBGateway.ExeScalarQuery<int?>(empQuery, empParameters);
                if (empid == null)
                {
                    result.Success = false;
                    result.Message = "Employee not found.";
                    return result;
                }
                TimeSpan totalHours = model.timeout - model.timein;
                double total = totalHours.TotalHours;
                string status = "";
                if (total <= 5)
                {
                    status = "Half Day";
                }
                else if (total > 5 && total <= 8)
                {
                    status = "Short Leave";
                }
                else
                {
                    status = "Present";
                }
                var query = @"UPDATE mp_attendance SET timein = @timein, timeout = @timeout, total = @total, status = @status WHERE empid = @empid";
                var parameters = new DynamicParameters();
                parameters.Add("@empid", empid);
                parameters.Add("@timein", model.timein);
                parameters.Add("@timeout", model.timeout);
                parameters.Add("@total", total);
                parameters.Add("@status", status);

                var rowsAffected = await _DBGateway.ExecuteAsync(query, parameters);

                if (rowsAffected > 0)
                {
                    result.Success = true;
                    result.Message = "Attendance updated successfully.";
                    result.Data = rowsAffected;
                }
                else
                {
                    result.Success = false;
                    result.Message = "Attendance update failed.";
                }
            }
            catch (Exception ex)
            {
                result.Success = false;
                result.Message = $"Error while updating attendance: {ex.Message}";
            }

            return result;
        }



    }
}
