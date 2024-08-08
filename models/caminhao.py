from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Caminhao(db.Model):
    def to_dict(self):
        
        return{
            'codigo': self.codigo,
            'marca': self.marca,
            'kmrodados': self.kmrodados,
            'codmotorista': self.codmotorista,
            'capacidade': self.capacidade,
        }
    
    codigo = db.Column(db.Integer, primary_key = True, nullable=False, unique=True) #propriedades da coluna id
    marca = db.Column(db.String(100))
    kmrodados = db.Column(db.Integer)
    codmotorista = db.Column(ForeignKey('motorista.codigo'))
    capacidade = db.Column(db.Float(100))

    motorista = relationship('Motorista', backref='caminhao')

    def __init__(self, marca, kmrodados, codmotorista, capacidade):
        self.marca = marca
        self.kmrodados = kmrodados
        self.codmotorista = codmotorista
        self.capacidade = capacidade