from flask import  request
from models.motorista import Motorista
from database.db import db

def motorista_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                motorista = Motorista(data['cpf'], data['nome'], data['cargahoraria'])
                db.session.add(motorista)
                db.session.commit()
                return 'motorista cadastrado com sucesso', 200
            except Exception as e:
                return 'O motorista não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Motorista.query.all()
                teste = {'motoristas': [motorista.to_dict() for motorista in data]}
                return teste

            except Exception as e:
                return 'Não foi possível buscar motoristas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_motorista_id = data['codigo']
                put_motorista = Motorista.query.get(put_motorista_id)
                if put_motorista is None:
                    return {'error': 'motorista não encontrado'}, 404
                put_motorista.cpf = data.get('cpf', put_motorista.cpf)
                put_motorista.nome = data.get('nome', put_motorista.nome)
                put_motorista.cargahoraria = data.get('cargahoraria', put_motorista.cargahoraria)
                db.session.commit()
                return 'motorista atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar motorista. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_motorista_id = data['codigo']
                delete_motorista = Motorista.query.get(delete_motorista_id)
                if delete_motorista is None:
                    return {'error': 'motorista não encontrado'}, 404
                db.session.delete(delete_motorista)
                db.session.commit()
                return 'motorista deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar motorista. Erro{}'.format(e)}, 400
                
            