import React, { useMemo, useState } from "react";
import {
  CircleDollarSign,
  Image,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  Stethoscope,
  Trash2,
  Upload,
  UserCog,
  UsersRound,
  X,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import "../styles/admin-panel.css";

const SERVICE_ICON_OPTIONS = [
  "Sparkles",
  "Smile",
  "Layers",
  "ShieldCheck",
  "Activity",
  "Clock",
];

const COLLECTIONS = {
  services: {
    label: "Servicios",
    icon: CircleDollarSign,
    titleKey: "title",
    subtitleKey: "price",
    defaultDraft: {
      title: "",
      tag: "",
      price: "",
      duration: "",
      description: "",
      icon: "Sparkles",
    },
    fields: [
      { name: "title", label: "Servicio", placeholder: "Ej. Endodoncia" },
      { name: "tag", label: "Categoría", placeholder: "Ej. Especializado" },
      { name: "price", label: "Precio", placeholder: "Ej. Desde S/ 350" },
      { name: "duration", label: "Duración", placeholder: "Ej. 60 min" },
      {
        name: "description",
        label: "Descripción",
        placeholder: "Resumen breve del tratamiento",
        type: "textarea",
      },
    ],
  },
  dentists: {
    label: "Dentistas",
    icon: Stethoscope,
    titleKey: "name",
    subtitleKey: "role",
    defaultDraft: {
      name: "",
      role: "",
      specialty: "",
      experience: "",
      image: "",
    },
    fields: [
      { name: "name", label: "Nombre", placeholder: "Ej. Dra. Ana López" },
      { name: "role", label: "Cargo", placeholder: "Ej. Endodoncista" },
      {
        name: "specialty",
        label: "Especialidad",
        placeholder: "Tratamientos o enfoque principal",
      },
      {
        name: "experience",
        label: "Experiencia",
        placeholder: "Ej. 10 años de experiencia",
      },
    ],
  },
  employees: {
    label: "Empleados",
    icon: UsersRound,
    titleKey: "name",
    subtitleKey: "role",
    defaultDraft: {
      name: "",
      role: "",
      specialty: "",
      experience: "",
      image: "",
    },
    fields: [
      { name: "name", label: "Nombre", placeholder: "Ej. Rosa Pérez" },
      { name: "role", label: "Cargo", placeholder: "Ej. Recepción" },
      {
        name: "specialty",
        label: "Funciones",
        placeholder: "Agenda, caja, asistencia o apoyo clínico",
      },
      {
        name: "experience",
        label: "Área",
        placeholder: "Ej. Atención al paciente",
      },
    ],
  },
};

const getCleanDraft = (draft) =>
  Object.entries(draft).reduce(
    (clean, [key, value]) => ({
      ...clean,
      [key]: typeof value === "string" ? value.trim() : value,
    }),
    {},
  );

export default function AdminPanel({
  services,
  dentists,
  employees,
  addItem,
  updateItem,
  removeItem,
  resetContent,
}) {
  const [activeCollection, setActiveCollection] = useState("services");
  const [draft, setDraft] = useState(COLLECTIONS.services.defaultDraft);
  const [editingId, setEditingId] = useState(null);

  const currentConfig = COLLECTIONS[activeCollection];
  const currentItems = useMemo(
    () => ({ services, dentists, employees })[activeCollection],
    [activeCollection, dentists, employees, services],
  );

  const selectCollection = (collection) => {
    setActiveCollection(collection);
    setDraft(COLLECTIONS[collection].defaultDraft);
    setEditingId(null);
  };

  const updateDraft = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateDraft("image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = getCleanDraft(draft);
    const requiredValue = item[currentConfig.titleKey];

    if (!requiredValue) return;

    if (editingId) {
      updateItem(activeCollection, editingId, item);
    } else {
      addItem(activeCollection, item);
    }

    setDraft(currentConfig.defaultDraft);
    setEditingId(null);
  };

  const editItem = (item) => {
    setDraft({ ...currentConfig.defaultDraft, ...item });
    setEditingId(item.id);
  };

  const cancelEdit = () => {
    setDraft(currentConfig.defaultDraft);
    setEditingId(null);
  };

  const restoreDefaults = () => {
    const shouldRestore = window.confirm(
      "¿Deseas restaurar los servicios y el equipo inicial?",
    );

    if (shouldRestore) {
      resetContent();
      cancelEdit();
    }
  };

  return (
    <section id="administracion" className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          badge="Administración"
          title="Gestiona servicios, dentistas y empleados"
          subtitle="Actualiza el catálogo público y el equipo visible en la página desde un solo panel."
        />

        <div className="admin-shell">
          <div className="admin-toolbar">
            <div className="admin-tabs" role="tablist" aria-label="Panel administrativo">
              {Object.entries(COLLECTIONS).map(([key, config]) => {
                const IconComp = config.icon;
                const isActive = key === activeCollection;

                return (
                  <button
                    className={`admin-tab ${isActive ? "active" : ""}`}
                    type="button"
                    key={key}
                    onClick={() => selectCollection(key)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <IconComp size={18} />
                    <span>{config.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              className="admin-reset"
              type="button"
              onClick={restoreDefaults}
              aria-label="Restaurar datos iniciales"
            >
              <RotateCcw size={17} />
              <span>Restaurar</span>
            </button>
          </div>

          <div className="admin-grid">
            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="admin-form-heading">
                <UserCog size={20} />
                <h3>{editingId ? "Editar registro" : "Nuevo registro"}</h3>
              </div>

              <div className="admin-fields">
                {activeCollection === "services" && (
                  <label className="admin-field">
                    <span>Ícono</span>
                    <select
                      value={draft.icon}
                      onChange={(event) => updateDraft("icon", event.target.value)}
                    >
                      {SERVICE_ICON_OPTIONS.map((icon) => (
                        <option key={icon} value={icon}>
                          {icon}
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                {activeCollection !== "services" && (
                  <div className="admin-image-field admin-field-full">
                    <div className="admin-image-preview">
                      {draft.image ? (
                        <img src={draft.image} alt="Vista previa del integrante" />
                      ) : (
                        <Image size={28} />
                      )}
                    </div>

                    <div className="admin-image-controls">
                      <label className="admin-upload-button">
                        <Upload size={17} />
                        <span>Subir imagen</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>

                      {draft.image && (
                        <button
                          className="admin-remove-image"
                          type="button"
                          onClick={() => updateDraft("image", "")}
                        >
                          <Trash2 size={16} />
                          <span>Quitar imagen</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {currentConfig.fields.map((field) => (
                  <label
                    className={`admin-field ${
                      field.type === "textarea" ? "admin-field-full" : ""
                    }`}
                    key={field.name}
                  >
                    <span>{field.label}</span>
                    {field.type === "textarea" ? (
                      <textarea
                        value={draft[field.name]}
                        placeholder={field.placeholder}
                        onChange={(event) =>
                          updateDraft(field.name, event.target.value)
                        }
                        rows={4}
                      />
                    ) : (
                      <input
                        value={draft[field.name]}
                        placeholder={field.placeholder}
                        onChange={(event) =>
                          updateDraft(field.name, event.target.value)
                        }
                      />
                    )}
                  </label>
                ))}
              </div>

              <div className="admin-actions">
                <button className="btn btn-primary" type="submit">
                  {editingId ? <Save size={18} /> : <Plus size={18} />}
                  <span>{editingId ? "Guardar cambios" : "Agregar"}</span>
                </button>
                {editingId && (
                  <button className="btn btn-secondary" type="button" onClick={cancelEdit}>
                    <X size={18} />
                    <span>Cancelar</span>
                  </button>
                )}
              </div>
            </form>

            <div className="admin-list">
              {currentItems.map((item) => (
                <article
                  className={`admin-list-item ${
                    activeCollection !== "services" ? "with-photo" : ""
                  }`}
                  key={item.id}
                >
                  {activeCollection !== "services" && (
                    item.image ? (
                      <img
                        className="admin-item-photo"
                        src={item.image}
                        alt={`Foto de ${item[currentConfig.titleKey]}`}
                      />
                    ) : (
                      <div className="admin-item-photo admin-item-photo-empty">
                        <Image size={20} />
                      </div>
                    )
                  )}
                  <div>
                    <span className="admin-item-kicker">
                      {item[currentConfig.subtitleKey]}
                    </span>
                    <h3>{item[currentConfig.titleKey]}</h3>
                    <p>{item.description || item.specialty}</p>
                  </div>

                  <div className="admin-item-actions">
                    <button
                      type="button"
                      onClick={() => editItem(item)}
                      aria-label={`Editar ${item[currentConfig.titleKey]}`}
                      title="Editar"
                    >
                      <Pencil size={17} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(activeCollection, item.id)}
                      aria-label={`Eliminar ${item[currentConfig.titleKey]}`}
                      title="Eliminar"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </article>
              ))}

              {currentItems.length === 0 && (
                <div className="admin-empty">
                  <p>No hay registros en esta sección.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
