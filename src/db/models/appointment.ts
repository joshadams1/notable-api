import { Model, DataTypes } from 'sequelize';
import appointmentDB from '../db_connections/appointment_connection';

class Appointment extends Model {
    static async createAppointment(request: {doctorId: string, name: string, time: string, kind: string}): Promise<Appointment | String> {
        const {doctorId, name, time, kind} = request;
        const appointment: Appointment = await Appointment.create({
            doctorId,
            name,
            time,
            kind
        });
        if (!appointment) {
            return 'failed to create appointment';
        }

        return appointment;
    }

    static async findAppointmentsByDoctorID(id: string): Promise<Appointment[] | []> {
        const appointments: Appointment[] = await Appointment.findAll({
            where: {
                doctorId: id
            }
        });
        return appointments;
    }
}

Appointment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    doctorId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kind: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: appointmentDB,
    modelName: 'appointment'
});

export default Appointment;