import db from "../models/index";

const getAllJobs = async () => {
  try {
    let jobs = await db.JobInfo.findAll({
      attributes: [
        "id",
        "title",
        "address",
        "description",
        "salary",
        "sourcePicture",
      ],
      //   include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (jobs) {
      return {
        EM: "get data success",
        EC: 0,
        DT: jobs,
      };
    } else {
      return {
        EM: "get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const getJobWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    const { count, rows } = await db.JobInfo.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: [
        "id",
        "title",
        "companyId",
        "careerId",
        "address",
        "numberEmployee",
        "experience",
        "level",
        "salary",
        "education",
        "description",
        "requirements",
        "deadline",
        "sourcePicture",
      ],
      //   include: { model: db.career, attributes: ["name", "description", "id"] },
      order: [["id", "DESC"]],
    });

    let totalPages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: totalPages,
      jobs: rows,
    };
    console.log(data);
    return {
      EM: "FETCH Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong with service",
      EC: 1,
      DT: [],
    };
  }
};

const createNewJob = async (data) => {
  try {
    // create new job
    await db.JobInfo.create(data);
    return {
      EM: "CREATE Ok!",
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

const updateJob = async (data) => {
  try {
    if (!data.id) {
      return {
        EM: "Error with empty Job",
        EC: 1,
        DT: "",
      };
    }
    let job = await db.JobInfo.findOne({
      where: { id: data.id },
    });

    if (job) {
      // update
      await job.update({
        title: data.title,
        companyId: data.companyId,
        careerId: data.careerId,
        address: data.address,
        numberEmployee: data.numberEmployee,
        experience: data.experience,
        level: data.level,
        salary: data.salary,
        education: data.education,
        description: data.description,
        requirements: data.requirements,
        deadline: data.deadline,
        sourcePicture: data.sourcePicture,
      });
      return {
        EM: "Update Job Success",
        EC: 0,
        DT: "",
      };
    } else {
      // not found user
      return {
        EM: "Job not found",
        EC: 2,
        DT: "",
      };
    }
  } catch (error) {
    console.log(error);
    return { EM: "something wrong with service", EC: 1, DT: [] };
  }
};

const deleteJob = async (id) => {
  try {
    let job = await db.JobInfo.findOne({
      where: { id: id },
    });
    if (job) {
      await job.destroy();

      return {
        EM: "DELETE job success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "job not exist",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "error from service",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getJobWithPagination,
  getAllJobs,
  createNewJob,
  updateJob,
  deleteJob,
};
