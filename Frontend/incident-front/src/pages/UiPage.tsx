import {
  AppButton,
  AppInput,
  AppTextarea,
  AppSelect,
  AppBadge,
  AppDot,
  AppLabel,
  AppText,
  AppDivider,
  AppSpinner,
  AppIconButton,
  AppAvatarPlaceholder,
} from "@/components/atoms";

export function UIPage() {
  return (
    <div className="p-8 flex flex-col gap-8 max-w-2xl mx-auto">

      {/* Textos */}
      <section className="flex flex-col gap-2">
        <AppText variant="h1">Heading 1</AppText>
        <AppText variant="h2">Heading 2</AppText>
        <AppText variant="h3">Heading 3</AppText>
        <AppText variant="body">Texto normal body</AppText>
        <AppText variant="caption">Texto caption pequeño</AppText>
        <AppText variant="muted">Texto muted / secundario</AppText>
      </section>

      <AppDivider />

      {/* Botones */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Buttons</AppText>
        <div className="flex gap-2 flex-wrap">
          <AppButton label="Default" />
          <AppButton label="Outline" variant="outline" />
          <AppButton label="Destructive" variant="destructive" />
          <AppButton label="Ghost" variant="ghost" />
          <AppButton label="Disabled" disabled />
        </div>
      </section>

      <AppDivider />

      {/* IconButton */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Icon Buttons</AppText>
        <div className="flex gap-2">
          <AppIconButton aria-label="Buscar" icon={<span>🔍</span>} />
          <AppIconButton aria-label="Cerrar" icon={<span>✕</span>} />
          <AppIconButton aria-label="Configuración" icon={<span>⚙️</span>} />
        </div>
      </section>

      <AppDivider />

      {/* Inputs */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Inputs</AppText>
        <AppLabel required>Nombre</AppLabel>
        <AppInput placeholder="Escribe tu nombre..." />
        <AppLabel>Con error</AppLabel>
        <AppInput
          placeholder="Email inválido"
          errorMessage="Este campo es requerido"
        />
      </section>

      <AppDivider />

      {/* Textarea */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Textarea</AppText>
        <AppTextarea placeholder="Escribe un comentario..." />
        <AppTextarea
          placeholder="Con error"
          errorMessage="El comentario no puede estar vacío"
        />
      </section>

      <AppDivider />

      {/* Select */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Select</AppText>
        <AppSelect
          placeholder="Elige una opción"
          options={[
            { value: "1", label: "Opción 1" },
            { value: "2", label: "Opción 2" },
            { value: "3", label: "Opción 3" },
          ]}
        />
      </section>

      <AppDivider />

      {/* Badges y Dots */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Badges & Dots</AppText>
        <div className="flex gap-2 items-center flex-wrap">
          <AppBadge label="Default" />
          <AppBadge label="Secondary" variant="secondary" />
          <AppBadge label="Destructive" variant="destructive" />
          <AppBadge label="Outline" variant="outline" />
        </div>
        <div className="flex gap-3 items-center mt-2">
          <AppDot color="green" /> <AppText variant="caption">Activo</AppText>
          <AppDot color="red" />  <AppText variant="caption">Inactivo</AppText>
          <AppDot color="yellow" /> <AppText variant="caption">Pendiente</AppText>
          <AppDot color="gray" /> <AppText variant="caption">Desconocido</AppText>
        </div>
      </section>

      <AppDivider />

      {/* Spinner */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Spinners</AppText>
        <div className="flex gap-4 items-center">
          <AppSpinner size="sm" />
          <AppSpinner size="md" />
          <AppSpinner size="lg" />
        </div>
      </section>

      <AppDivider />

      {/* Avatar */}
      <section className="flex flex-col gap-2">
        <AppText variant="h3">Avatar Placeholders</AppText>
        <div className="flex gap-4 items-center">
          <AppAvatarPlaceholder fallback="Juan Pérez" size="sm" />
          <AppAvatarPlaceholder fallback="María García" size="md" />
          <AppAvatarPlaceholder fallback="Carlos López" size="lg" />
        </div>
      </section>

    </div>
  );
}