import React from 'react';
import {formatDate} from "../../utils/date";

const TransanctionCard = ({ filteredTransactions, activeCategory, transactionData }) => {
    return (
        <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
                <tr style={styles.table.tr}>
                    <th style={styles.table.th}>Posted At</th>
                    <th style={styles.table.th}>Description</th>
                    <th style={styles.table.th}>Category</th>
                    <th style={styles.table.th}>Amount</th>
                </tr>
                {filteredTransactions && (
                    filteredTransactions.map((eachTransaction) => (
                        <tr key={eachTransaction.id}>
                            <td style={styles.table.td}>{formatDate(eachTransaction.posted_at)}</td>
                            <td style={styles.table.td}>{eachTransaction.description}</td>
                            <td style={styles.table.td}>{eachTransaction.category}</td>
                            <td style={styles.table.td}>{eachTransaction.amount}</td>
                        </tr>
                    ))
                )}
                {activeCategory.category === "All" && (
                    transactionData.map((eachTransaction) => (
                        <tr key={eachTransaction.id}>
                            <td style={styles.table.td}>{formatDate(eachTransaction.posted_at)}</td>
                            <td style={styles.table.td}>{eachTransaction.description}</td>
                            <td style={styles.table.td}>{eachTransaction.category}</td>
                            <td style={styles.table.td}>{eachTransaction.amount}</td>
                        </tr>
                    ))
                )}
            </table>
        </div>
    );
};

export default TransanctionCard;
const styles = {
    table: {
        fontFamily: 'Quicksand, sans-serif',
        borderCollapse: 'collapse',
        width: '99%',
        fontSize: "20px",
        td: {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '10px',
        },
        th: {
            border: '1px solid #dddddd',
            padding: '10px',
            textAlign: 'center',
        },
        tr: {
            borderRadius: '10px',
        }
    },
}