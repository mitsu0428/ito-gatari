import React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface TableProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
}

interface TableCellProps {
  children: React.ReactNode;
}

export default function TableComponent({ children }: TableProps) {
  return (
    <StyledTableContainer>
      <StyledTable>{children}</StyledTable>
    </StyledTableContainer>
  );
}

export function TableHeadComponent({ children }: TableHeadProps) {
  return <StyledTableHead>{children}</StyledTableHead>;
}

export function TableBodyComponent({ children }: TableBodyProps) {
  return <TableBody>{children}</TableBody>;
}

export function TableRowComponent({ children }: TableRowProps) {
  return <StyledTableRow>{children}</StyledTableRow>;
}

export function TableCellComponent({ children }: TableCellProps) {
  return <StyledTableCell>{children}</StyledTableCell>;
}

const StyledTableContainer = styled(TableContainer)`
  width: 100%;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #f5f5f5;
`;

const StyledTableRow = styled(TableRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
`;

const StyledTableCell = styled(TableCell)`
  background-color: #f5f5f5;
  white-space: nowrap;
`;
