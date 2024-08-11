package com.api.services;

import com.api.dtos.UserInfoResponse;
import com.api.entities.Role;
import com.api.entities.User;
import com.api.interfaces.TopicRepository;
import com.api.interfaces.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isEmpty()) throw new UsernameNotFoundException("User not found in database");
        else return new org.springframework.security.core.userdetails.User(
                user.get().getUsername(),
                user.get().getPassword(),
                user.get().getRoles().stream().map(el -> new SimpleGrantedAuthority(el.getName())).toList()
        );
    }
    public User getUser() {
        return userRepository.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName()).get();
    }
    public void createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
    public UserInfoResponse getUserInfo() {
        UserInfoResponse response = new UserInfoResponse();
        User user = getUser();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setRoles(user.getRoles().stream().map(Role::getName).toList());
        return response;
    }
}
