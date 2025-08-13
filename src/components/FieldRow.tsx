import type {Field, FieldType} from "./types.ts";


type FieldRowProps = {
    field: Field;
    onChangeType: (id: number, type: FieldType) => void;
    onRemove: (id: number) => void;
}

export const FieldRow = ({field, onChangeType, onRemove}: FieldRowProps) => {
    return (
        <div className="flex items-center gap-2 border p-2 rounded">
            <select
                value={field.type}
                onChange={(e) =>
                    onChangeType(field.id, e.target.value as FieldType)
                }
                className="border p-1"
            >
                <option value="text">TEXT</option>
                <option value="number">NUMBER</option>
                <option value="select">SELECT</option>
            </select>

            {field.type === "text" && (
                <input type="text" placeholder="Введите текст" className="border p-1 flex-1"/>
            )}
            {field.type === "number" && (
                <input type="number" placeholder="Введите число" className="border p-1 flex-1"/>
            )}
            {field.type === "select" && (
                <select className="border p-1 flex-1">
                    <option>Вариант 1</option>
                    <option>Вариант 2</option>
                </select>
            )}

            <button
                type="button"
                onClick={() => onRemove(field.id)}
                className="bg-red-500 p-2 rounded"
            >
                X
            </button>
        </div>
    );
};