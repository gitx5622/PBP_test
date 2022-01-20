import React from 'react';
import {formatDate} from "../../utils/date";
import '../../styles/transactionCard.scss';

const TransanctionCard = ({ filteredTransactions, activeCategory, transactionData }) => {
    return (
        <div className="tableContainer">
            <table className="table">
                <tr>
                    <th>Posted At</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                {filteredTransactions && (
                    filteredTransactions.map((eachTransaction) => (
                        <tr key={eachTransaction.id}>
                            <td>{formatDate(eachTransaction.posted_at)}</td>
                            <td>{eachTransaction.description}</td>
                            <td>{eachTransaction.category}</td>
                            <td>{eachTransaction.amount}</td>
                        </tr>
                    ))
                )}
                {activeCategory.category === "All" && (
                    transactionData.map((eachTransaction) => (
                            <tr key={eachTransaction.id}>
                                <td>{formatDate(eachTransaction.posted_at)}</td>
                                <td>{eachTransaction.description}</td>
                                <td>{eachTransaction.category}</td>
                                <td>{eachTransaction.amount}</td>
                            </tr>
                        ))
                )}
                    )}
            </table>
        </div>
    );
};

export default TransanctionCard;