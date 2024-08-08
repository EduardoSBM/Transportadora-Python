from flask import  request
from models.admin import Admin
from database.db import db

def admin_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                admin = Admin(data['nome'], data['login'], data['senha'])
                db.session.add(admin)
                db.session.commit()
                return 'Admin cadastrada com sucesso', 200
            except Exception as e:
                return 'O Admin não foi cadastrado Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Admin.query.all()
                teste = {'admins': [admin.to_dict() for admin in data]}
                return teste

            except Exception as e:
                return 'Não foi possível buscar admins. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_admin_id = data['codigo']
                put_admin = Admin.query.get(put_admin_id)
                if put_admin is None:
                    return {'error': 'admin não encontrado'}, 404
                put_admin.nome = data.get('nome', put_admin.nome)
                put_admin.login = data.get('login', put_admin.login)
                put_admin.senha = data.get('senha', put_admin.senha)
                db.session.commit()
                return 'admin atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar admin. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_admin_id = data['codigo']
                delete_admin = Admin.query.get(delete_admin_id)
                if delete_admin is None:
                    return {'error': 'admin não encontrado'}, 404
                db.session.delete(delete_admin)
                db.session.commit()
                return 'admin deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar admin. Erro{}'.format(e)}, 400
                
            