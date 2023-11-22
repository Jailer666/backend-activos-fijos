const { Model, DataTypes, Sequelize } = require('sequelize');


const SEGUIMIENTO_TABLE = 'seguimientos';

const SeguimientoSchema={
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER//tipo entero
  },
  date:{
    allowNull:false,
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  totalPolice: {
    type: DataTypes.VIRTUAL,
    get(){
      if(this.items.length>0){
        return this.items.reduce((total,item)=>{
          return total+=item.cantPolice;
        },0)
      }
      return 0;
    }
  }
}


class Seguimiento extends Model{
  static associate(models){
    this.belongsToMany(models.Contrato,{
      as:'items',
      through:models.ContratoSeguimiento,
      foreignKey:'seguimientoId',
      otherKey:'contratoId',

     });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: SEGUIMIENTO_TABLE,
      modelName: 'Seguimiento',
      timestamps: false
    }
  }
}

module.exports={Seguimiento,SeguimientoSchema,SEGUIMIENTO_TABLE}
