import {FieldRow} from "./FieldRow.tsx";
import {useState} from "react";
import type {Field, FieldType} from "./types.ts";

export const FormBuilder = () => {
    const [fields, setFields] = useState<Field[]>([]);

    const addField = () => {
        setFields((prevState ) => [...prevState, {id: Date.now(), type: "text"}]);
    };

    const changeFieldType = (id: number, type: FieldType) => {
        setFields((prevState) => prevState.map(el => el.id === id ? {...el, type} : el));
    }

    const removeField = (id: number) => {
        setFields((prevState) => prevState.filter((f) => f.id !== id));
    };

    return (
        <div className="p-4">
            <button
                onClick={addField}
                className="bg-yellow-200 px-3 py-1 rounded mb-4"
            >
                Добавить поле
            </button>

            <form className="space-y-3">
                {fields.map((field) => (
                    <FieldRow
                        key={field.id}
                        field={field}
                        onChangeType={changeFieldType}
                        onRemove={removeField}
                    />
                ))}
                {fields.length > 0 && <button
                    type="submit"
                    className="w-full bg-green-800 text-white p-2"
                >
                    Сохранить
                </button>}

            </form>
        </div>
    );
};