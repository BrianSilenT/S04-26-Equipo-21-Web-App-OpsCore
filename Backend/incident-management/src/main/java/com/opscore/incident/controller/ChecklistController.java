package com.opscore.incident.controller;

import com.opscore.incident.model.Checklist;
import com.opscore.incident.service.ChecklistService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/checklists")
public class ChecklistController {

    private final ChecklistService checklistService;

    @PostMapping
    public Checklist crearChecklist(@RequestBody Checklist checklist) {
        return checklistService.crearChecklist(checklist);
    }

    @PutMapping("/{id}")
    public Checklist actualizarChecklist(@PathVariable Long id, @RequestParam Boolean cumplido) {
        return checklistService.actualizarChecklist(id, cumplido);
    }
}

