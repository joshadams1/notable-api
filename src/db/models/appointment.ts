import { Model, DataTypes } from 'sequelize';
import appointmentDB from '../db_connections/appointment_connection';

class Appointment extends Model {
    static async createAppointment(doctorId: string, name: string, time: Date, kind: string, email: string): Promise<Appointment | String> {
        const appointment = await Appointment.create({
            doctorId,
            name,
            time,
            kind,
            email
        });
        if (!appointment) {
            return 'failed to create appointment';
        }

        return appointment;
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
        type: DataTypes.DATE,
        allowNull: false
    },
    kind: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: appointmentDB,
    modelName: 'appointment',
    indexes: [
        {
            unique: true,
            fields: ['doctorId']
        }
    ]
});

export default Appointment;