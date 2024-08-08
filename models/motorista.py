from database.db import db

class Motorista(db.Model):
    def to_dict(self):
        
        return{
            'codigo': self.codigo,
            'cpf': self.cpf,
            'nome': self.nome,
            'cargahoraria': self.cargahoraria
        }
    
    codigo = db.Column(db.Integer, primary_key = True, nullable=False, unique=True) #propriedades da coluna id
    cpf = db.Column(db.Integer)
    nome = db.Column(db.String(100))
    cargahoraria = db.Column(db.Integer)

    def __init__(self, cpf, nome, cargahoraria):
        self.cpf = cpf
        self.nome = nome
        self.cargahoraria = cargahoraria