import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../slices';

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orders = useSelector(state => state.data.orders);

    const editOrder = (id) => {
        navigate(`/order/${id}`);
    }

    const ordersList = orders.map(order => {
        return (
            <tr key={order.id}>
                <td>Commande n°{order.id}</td>
                <td>{order.total}€</td>
                <td className={order.paid ? "bg-success" : "bg-warning"}>{order.paid ? "Réglé" : "En attente de paiement"}</td>
                <td className={order.paid ? "order-actions hidden" : "order-actions"}>
                    <button
                        className="order-action-edit"
                        onClick={() => editOrder(order.id)}
                    >
                        <FontAwesomeIcon icon="edit" size="2x" />
                    </button>
                    <button
                        className="order-action-delete"
                        onClick={() => dispatch(deleteOrder(order.id))}
                    >
                        <FontAwesomeIcon icon="trash" size="2x" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="App">
            <Header />

            <div className="orders-list">
                <h2>Liste des commandes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Total Commande</th>
                            <th>Statut Commande</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;