import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const SchemaTable = props => {
  if (!props.schema) return null;
  // export default class SchemaTable extends React.Component {
  const required = props.schema.required || [];

  const data = Object.keys(props.schema.properties).map(prop => {
    const def = props.schema.properties[prop];
    return {
      prop,
      def,
    };
  });

  const columns = [
    {
      Header: 'Prop',
      accessor: 'prop',
      minWidth: 60,
    },
    {
      Header: 'Type',
      id: 'type',
      accessor: item => {
        if (item.def.type) {
          return item.def.type;
        }
        if (item.def.typeof) {
          return item.def.typeof;
        }
        if (item.prop === 'children') {
          return 'React Children';
        }
        return 'hmm.... not sure...';
      },
      Cell: cell => {
        let details;
        if (cell.original.def.enum) {
          details = (
            <details>
              <summary>Must be one of:</summary>
              {cell.original.def.enum.join(', ')}
            </details>
          );
        }
        return (
          <span>
            <code>{cell.value}</code>
            {details}
          </span>
        );
      },
      minWidth: 50,
      style: {
        whiteSpace: 'initial',
      },
    },
    {
      Header: 'Required',
      id: 'required',
      accessor: item => (required.includes(item.prop) ? 'Yes' : 'No'),
      minWidth: 30,
    },
    {
      Header: 'Default',
      id: 'default',
      minWidth: 50,
      accessor: item => {
        if (typeof item.def.default === 'function') {
          return item.def.default.toString() || 'function';
        }
        return item.def.default;
      },
    },
    {
      Header: 'Description',
      id: 'description',
      accessor: item => {
        if (item.def.title && item.def.description) {
          return `${item.def.title}: ${item.def.description}`;
        }
        return item.def.description || item.def.title;
      },
      style: {
        whiteSpace: 'initial',
      },
    },
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      showPagination={false}
      defaultPageSize={data.length}
    />
  );
};

SchemaTable.propTypes = {
  schema: PropTypes.object.isRequired,
};

export default SchemaTable;
