import { Model, DataTypes } from 'sequelize';
import doctorDB from '../db_connections/doctor_connection';

class Doctor extends Model {
    static async getAllDoctors(): Promise<Doctor[] | []> {
        return await Doctor.findAll();
    }

    static async getDoctor(id: string): Promise<Doctor | null> {
        // Find specific doctor by the primary key of 'id' on the doctor table.
        return await Doctor.findByPk(id);
    }
}

Doctor.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: doctorDB,
    modelName: 'doctor',
    // if we need to create an appointment table then we'll add an index to the model and index it on doctorid field
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['username']
    //     }
    // ]
});

export default Doctor;