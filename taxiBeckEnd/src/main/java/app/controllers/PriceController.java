package app.controllers;

import app.entity.Car;
import app.entity.Price;
import app.exception.ItemNotFoundException;
import app.repos.rep.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:6227"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, maxAge = 3600)
public class PriceController {
    @Autowired
    PriceRepository priceRepository;

    @GetMapping("/price")
    @PreAuthorize("hasRole('USER') or hasRole('DRIVER') or hasRole('ADMIN')")
    public ResponseEntity<List<Price>> getAllNotes() {
        return ResponseEntity.ok(priceRepository.findAll());
    }

    @PreAuthorize("hasRole('USER') or hasRole('DRIVER') or hasRole('ADMIN')")
    @GetMapping("/price/{id}")
    public Price getNoteById(@PathVariable(value = "id") Long priceId) throws Throwable {
        return (Price) priceRepository.findById(priceId)
                .orElseThrow(() -> new ItemNotFoundException(priceId));
    }

    @PreAuthorize("hasRole('USER') or hasRole('DRIVER') or hasRole('ADMIN')")
    @PutMapping("/price/upd/{id}")
    public Price updateNote(@PathVariable(value = "id") Long priceId,
                          @Valid
                          @RequestBody Price priceDetails) throws Throwable {

        Price price = (Price) priceRepository.findById(priceId)
                .orElseThrow(() -> new ItemNotFoundException(priceId));

        price.setPrice_id(priceDetails.getPrice_id());
        price.setPrice(priceDetails.getPrice());
        price.setTitle(priceDetails.getTitle());

        Price updatePrice = (Price) priceRepository.save(price);
        return updatePrice;
    }

    // Создать запись
    @PreAuthorize("hasRole('USER') or hasRole('DRIVER') or hasRole('ADMIN')")
    @PostMapping("/price")
    public Price createNote(@Valid @RequestBody Price price) {
        return priceRepository.save(price);
    }

    //удалить запись
    @PreAuthorize("hasRole('USER') or hasRole('DRIVER') or hasRole('ADMIN')")
    @DeleteMapping("/price/{id}")
    public ResponseEntity deleteBook(@PathVariable(value = "id") Long priceId) throws Throwable {

        Price price = (Price) priceRepository.findById(priceId)
                .orElseThrow(() -> new ItemNotFoundException(priceId));

        priceRepository.delete(price);
        return ResponseEntity.ok().build();
    }




}
