"use client";
import React from "react";
import ButtonComponent from "@/components/elements/ButtonComponents/ButtonComponent";
import CardComponent from "@/components/elements/CardComponents/CardComponent";
import InputComponent from "@/components/elements/InputComponents/InputComponent";
import TableComponent, {
  TableBodyComponent,
  TableCellComponent,
  TableHeadComponent,
  TableRowComponent,
} from "@/components/elements/TableComponents/TableComponents";
import FlexWrap from "@/components/elements/Container/FlexWrap";
import { Note } from "@/components/features/note/types/note";

export default function Home() {
  const [content, setContent] = React.useState("");
  const [dataSource, setDataSource] = React.useState<Note[]>([]);

  React.useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const notes = await response.json();
      setDataSource(notes);
    };
    fetchNotes();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSaveClick = async () => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const notes = await response.json();
    setDataSource(notes);

    setContent("");
  };

  const handleDeleteClick = async (id: number) => {
    const response = await fetch(`/api/notes?id=${id}`, {
      method: "DELETE",
    });

    const notes = await response.json();
    setDataSource(notes);
  };

  return (
    <CardComponent>
      <FlexWrap>
        <InputComponent
          type="text"
          name="content"
          placeholder="予約リクエストを入力してください"
          value={content}
          onChange={handleInputChange}
        />
        <ButtonComponent
          variant="contained"
          color="primary"
          onClick={handleSaveClick}
        >
          保存
        </ButtonComponent>
      </FlexWrap>

      <TableComponent>
        <TableHeadComponent>
          <TableRowComponent>
            <TableCellComponent>予約リクエスト</TableCellComponent>
            <TableCellComponent>削除</TableCellComponent>
          </TableRowComponent>
        </TableHeadComponent>

        <TableBodyComponent>
          {dataSource.map((note) => (
            <TableRowComponent key={note.id}>
              <TableCellComponent>{note.content}</TableCellComponent>
              <TableCellComponent>
                <ButtonComponent
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteClick(note.id)}
                >
                  削除
                </ButtonComponent>
              </TableCellComponent>
            </TableRowComponent>
          ))}
        </TableBodyComponent>
      </TableComponent>
    </CardComponent>
  );
}
