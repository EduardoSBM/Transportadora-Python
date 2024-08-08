from flask import  request
from models.demanda import Demanda
from database.db import db

def demanda_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                demanda = Demanda(data['remetente'], data['enderecoRemetente'], data['destinatario'], data['enderecoDestinatario'], data['carga'], data['pesoCarga'], data['volumeCarga'], data['codcaminhao'], data['valor'], data['codusuario'], data['metodoEntrega'])
                db.session.add(demanda)
                db.session.commit()
                return 'demanda cadastrada com sucesso', 200
            except Exception as e:
                return 'A demanda não foi cadastrada Error: {}'.format(str(e)), 405
            
        elif request.method == 'GET':
            try:
                data = Demanda.query.all()
                teste = {'demandas': [demanda.to_dict() for demanda in data]}
                return teste

            except Exception as e:
                return 'Não foi possível buscar demandas. Error: {}'.format(str(e)), 405

        elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_demanda_id = data['codigo']
                put_demanda = Demanda.query.get(put_demanda_id)
                if put_demanda is None:
                    return {'error': 'demanda não encontrado'}, 404
                put_demanda.remetente = data.get('remetente', put_demanda.remetente)
                put_demanda.enderecoRemetente = data.get('enderecoRemetente', put_demanda.enderecoRemetente)
                put_demanda.destinatario = data.get('destinatario', put_demanda.destinatario)
                put_demanda.enderecoDestinatario = data.get('enderecoDestinatario', put_demanda.enderecoDestinatario)
                put_demanda.carga = data.get('carga', put_demanda.carga)
                put_demanda.pesoCarga = data.get('pesoCarga', put_demanda.pesoCarga)
                put_demanda.volumeCarga = data.get('volumeCarga', put_demanda.volumeCarga)
                put_demanda.codcaminhao = data.get('codcaminhao', put_demanda.codcaminhao)
                put_demanda.valor = data.get('valor', put_demanda.valor)
                put_demanda.codusuario = data.get('codusuario', put_demanda.codusuario)
                put_demanda.metodoEntrega = data.get('metodoEntrega', put_demanda.metodoEntrega)

                db.session.commit()
                return 'demanda atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar demanda. Erro{}'.format(e)}, 400
        
        elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_demanda_id = data['codigo']
                delete_demanda = Demanda.query.get(delete_demanda_id)
                if delete_demanda is None:
                    return {'error': 'demanda não encontrado'}, 404
                db.session.delete(delete_demanda)
                db.session.commit()
                return 'demanda deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar demanda. Erro{}'.format(e)}, 400
                
            